import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useSWR from 'swr';
import { Color, Size } from '~/@types';
import { Button } from '~/atoms/button';
import { TextInput, Textarea } from '~/atoms/field';
import { fetcher } from '~/utils/api';
import { Box, Title, Content, Label, Row } from './UserInfo.styled';

const defaultValues = {
  email: '',
  github: '',
  introduction: '',
  linkedIn: '',
  nickname: '',
};

type ProfileResponse = {
  email: string | undefined;
  github: string | undefined;
  introduction: string | undefined;
  linkedIn: string | undefined;
  nickname: string | undefined;
};

const myPageEndpoint = `v1/user/profile`;

const UserInfo = () => {
  const methods = useForm({ defaultValues });
  const introductionText = useWatch({ control: methods.control, name: 'introduction' });
  const { handleSubmit } = methods;

  const { data: profile } = useSWR<ProfileResponse>(myPageEndpoint, fetcher);
  const { reset } = methods;

  // @Todo => submit form data
  const onSubmit = (data: any) => {
    console.log('complete', data);
  };

  useEffect(() => {
    if (profile) {
      reset(profile);
    }
  }, [profile, reset]);

  console.log(introductionText);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <Title>회원 정보 </Title>

        <Content>
          <Row>
            <Label>닉네임</Label>
            <TextInput
              name="nickname"
              description="10글자 이내 영문 대소문자, 한글, 숫자"
              // pattern={/^[A-za-z0-9]{5,15}/g}
              methods={methods}
              maxLength={10}
              required
            />
          </Row>
          <Row>
            <Label>소개글</Label>
            <Textarea
              name="introduction"
              maxRow={2}
              description={`${introductionText?.length ?? 0}/100`}
              methods={methods}
              maxLength={100}
            />
          </Row>
          <Row>
            <Label>링크드인</Label>
            <TextInput name="linkedIn" methods={methods} />
          </Row>
          <Row>
            <Label>Github</Label>
            <TextInput />
          </Row>
          <Row align="right">
            <Button color={Color.PRIMARY} size={Size.MIDDLE} onClick={handleSubmit(onSubmit)}>
              저장{' '}
            </Button>
          </Row>
        </Content>
      </Box>
    </form>
  );
};

export default UserInfo;
