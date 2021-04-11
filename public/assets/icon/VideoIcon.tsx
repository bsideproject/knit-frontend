import { VFC } from 'react';
import styled from '@emotion/styled';
import { useComponentID } from '~/utils/id';

export interface VideoIconProps {
  className?: string;
}
const VideoIcon: VFC<VideoIconProps> = ({ className }) => {
  const id = useComponentID();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="24"
      className={className}
      viewBox="0 0 22 24"
      fill="none"
    >
      <rect width="24" height="24" fill="#E5E5E5" />
      <g clipPath={`url(#clip${id})`}>
        <rect width="1280" height="1020" transform="translate(-1059 -678)" fill="white" />
        <g filter={`url(#filter${id}_d)`}>
          <rect
            x="31"
            y="-49"
            width="286"
            height="40"
            rx="4"
            transform="rotate(90 31 -49)"
            fill="white"
          />
        </g>
        <rect width="24" height="24" fill={`url(#pattern${id})`} />
        <rect width="24" height="24" style={{ mixBlendMode: 'lighten' }} />
      </g>
      <defs>
        <filter
          id={`filter${id}_d`}
          x="-24"
          y="-64"
          width="70"
          height="316"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <pattern id={`pattern${id}`} patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref={`#image${id}`} transform="scale(0.00195312)" />
        </pattern>
        <clipPath id={`clip${id}`}>
          <rect width="1280" height="1020" fill="white" transform="translate(-1059 -678)" />
        </clipPath>
        <image
          id={`image${id}`}
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAO1AAADtQB3D8e0QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7d13uGVleffx7z0MIggDKAQEDQgIqIAFSyxRQbEL+ipi1CDwWsAeETAWjNhiwVgioLFgsFD0TcCuQbA3UAIYHQRFpEgQnYChDnO/f6x94HDm9LP3ftZaz/dzXevicoY5+zfbzbp/+1ktMhNJklSXZaUDSJKk8bMASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVKHlpQMsRUSsB+wAbAOsADYENpq0rVsunaSCErgBuBb48+Cf1wKrgAuBSzJzTbl4UnmRmaUzzEtEbAvsCdwP2HGwbYOrGJIW7gbgImAlcAHwI+DMzFxVNJU0Rq0tABGxOfCYwbYnsF3ZRJJ67hbgp8DpwH8A383MG8tGkkanVQUgItYHngbsD+wFrFM2kaSKrQJOAU6gKQPt2VlKQ9CKAhARjwAOBJ5JcyxfktrkYuBTwMcy8+KyUaThKFoAIuIJwBuAhxcLIUnztxr4DPD2zFxZOoy0FGMvABERwD40g3/3sb64JA3HGuBzwNsy89zSYaTFGGsBiIgHAccADxzbi0rS6CTNoYHDMvPK0mGkhRjLJXQRsWlEHAv8EIe/pP4I4G+BX0bESyPCy5LVGSNfAYiI5wPvBjYf6QtJUnk/BQ7OzJ+UDiLNZWQFICI2Bj5Kc2a/JNViNfB64N1eOqg2G0kBiIjdgZPx5j2S6vVlYP/MvLp0EGk6Qz9eFREvB76Pw19S3Z4EnDO4z4nUOkNbAYiIdYDjgBcM5QdKUj/cDByYmZ8uHUSabCgrABFxR+DzOPwlaap1gRMi4tDSQaTJlrwCEBGbAqcBLnNJ0uzeAxzuyYFqgyUVgMET+84A7jO0RJLUb8cDB1kCVNqiDwFExIY0Z7k6/CVp/g4A3ls6hLSoAhAR69Ic8/eufpK0cK+KiMNLh1DdFnwIYPAwnxOA544kkSTV44DM/GTpEKrTYlYA3obDX5KG4aMR8ZjSIVSnBa0ARMSTgC/SPABDkrR0VwL3y8zflw6iusy7AETE3YBzgLuMNJEk1ecM4LGZuaZ0ENVjXocAImI5cCIOf0kahT2AI0uHUF3mew7Am4GHjzKIJFXujRHx6NIhVI85DwFExK40z7hePpZEklSvC4DdMvPG0kHUf7OuAAwu+TsWh78kjcOOgPcH0FjMugIQEQcCHx9fHEmq3g3AfTLz16WDqN9mLAARcWdgJbDZWBNJkr6SmU8qHUL9NtshgNfj8JekEp4YEXuVDqF+m3YFICI2Ay4G7jTuQJIkAL6dmY8qHUL9NdMKwKtw+EtSSY+MiEeUDqH+WmsFICJWAJcAGxdJJEma8NXMfGLpEOqn6VYAXobDX5La4AkR8YDSIdRPtysAEbEMOLhQFknS2l5SOoD66XaHACJiT+D0cnEkSVNcA2yZmdeXDqJ+mXoIYP8iKSRJM1kB7FM6hPrn1hWAiNiA5rnUGxZNtDiXAqcC3wEuBy4DrrAxS/WKiE2BrQbbtsDjB1sX93HeGKhCEbENsB/wIGDzSdsK4CLgfOC8wT+/lZl/WtDPn1QAngecMLTko3cz8BHg+Mw8q3QYSe0XEesBjwFeCTyucJyFuAXYOjOvLB1EoxURWwDPAp4NPBSIef7R/wU+BrwvM38znz8w+RDA3gsJWVACJwI7Z+bLHP6S5iszb8zML2fm44HHAmeXzjRP6wBPLh1CoxMRW0fEB4HfAh8AHsb8hz809+55BfCriDgpInaZ8zUzc+Kpf/9N+2/9ezXwzMw8s3QQSd032PcdBryDOZ6O2gKfzsznlQ6h4YqIrYHXAi8E1hvij74eOCgzT5zxtQcFYFfg3CG+8CicD+w936UNSZqviHgy8BmaY6ttdXlmbl06hIZjhIN/qncCr8vMNVN/Y6Lx7jnCFx+GHwIPc/hLGoXM/BLwcGBV6Syz2CoidiodQkszaan/Ipob741y+AMcAXwxIu449TcmCsAeIw6wFL8Dnp6Z15YOIqm/MvN8mjOubymdZRZt3ldrFgUG/2RPBI6e+osTBeBhYwyyENcB+2Tm70sHkdR/mfl14NDSOWbR1n21ZlB48E/2koh4+uRfWBYRd6a5rrCNjszMn5UOIakemfl+4Bulc8xg59IBND8RsVVLBv9kH4uIu0/8j6BplN8rl2dGF9Nc6ndj6SCS6hIR96e5RHAhl2GNwzWZ6cPaWiwitqI5ue9FtGPoT3XrTaWWAW09qeQNDn9JJQxWHj9dOsc0VkTEXUuH0NoG3/g/APwaeDntHP7QPGFyB2gKQBuXlC6luSRHkkp5V+kAM2jjPrtaHRr8E4JmdYJlwI5ls0zrtJz8mEJJGrPMPI9mp942bdxnV2fS4L+Ibgz+yQ6IiDssA+5SOsk0Ti0dQJJo576ojfvsakwz+Ne6vr4DNgeeugzYqHSSKa4DziwdQpKAL5UOMI227bOr0JPBP9n9ltO+D9PvMvOm0iEkiWZn3zZt22f32qSz+l9I94f+ZPdoYwG4vHQASRq4onSAabRtn91LPR78E+6xHNiwdIopLACSWiEzb4yIq2nXcfe27bN7ZTD4j6A5U76Pg3/CPZYDG5ROMcXVpQNI0iRtKwBt22f3QkWDf8KWy0snmIaX/0lqk7btk9p2d8JOq3DwT4g2FgBJkkZqcEfFiVv21jT4b2UBkCRVw8F/GwuAJKn3HPxrswBIknrLwT8zC4AkqXcGg/8I4MU4+KdlAZAk9YaDf/4sAJKkznPwL5wFQJLUWQ7+xbMASJI6x8G/dBYASVJnOPiHxwIgSWo9B//wWQAkSa3l4B8dC4AkqXUiYktuG/zrF47TSxYASVJrOPjHxwIgSSrOwT9+FgBJUjEO/nIsAJKksXPwl2cBkCSNjYO/PSwAkqSRc/C3jwVAkjQyg8F/OHAwDv5WsQBIkobOwd9+FgBJ0tA4+LvDAiBJWjIHf/dYACRJi+bg7y4LgCRpwSJiC5qz+h38HWUBkCTNm4O/PywAkqQ5Ofj7xwIgSZrRYPAfDhyCg38pVtOymbusdABJUvtExBYRcTTwG+DVOPwX67+AZwPHlg4ylQVAknQrB//QTAz+XTPzJGBN4TxradVyhCSpDJf6h+a/gKOAUzKzdUN/MguAJFXMwT80nRn8EywAklShSYP/YGCDwnG6rHODf4IFQJIq4uAfms4O/gkWAPVKRKwHrAA2orns5lrgmsy8pWgwqbDB4D+MZqnfwb94nR/8EywA6oSIuAOwA7AjsNNg2w7YmGbgT2x3mOHPXwdcM2m7GvgVsBK4YPDPSzIzR/oXkcbMwT80vRn8EywAap2IWBd4CLAn8Fc0w34bYJ0l/NgNBtuWk37t8VP+nesj4kLgF8C3gW9m5i+W8JpSMRHxF9x2cp+Df/F6N/gnWABUXEQsAx5AM/D3BB4B3KlAlPWBXQfbswbZrgDOAE6nKQQXF8glzZuDf2h6O/gnWABUxGDo7wH8LbAPsEnZRDO6K/CcwUZEXAR8FvhUZq4sGUyazME/NL0f/BMsABqriNiVZug/B9i6cJzF2B54A/CGiPgJcAJwYmZeVTaWauXgH5pqBv8EC4BGLiI2Al4APB+4b+E4w/SgwfbeiPgq8FHgNE8k1Dg4+Ifm58BbqGjwT7AAaGQiYhPglYNt08JxRmk58JTBdn5EvB042UsPNSKbRMR7cPAvVbWDf4IPA9LQRcTmgyH4W+Af6Pfwn2oX4DPALyLioMEVDdIwPQQ4FIf/Yv0c2A/YLTNPqnX4gwVAQxQRm0XEe4GLgb+nuS6/VvcEPgZcGBGHRISrbVJZkwf/yTUP/gkWAC1ZRCyLiBfT3Ezn7/CbyWR/CRwD/DQiHlE6jFQhB/8MLABakojYHfgBcBxw58Jx2mxX4NsRcfzg5C1Jo+Xgn4MFQIsSEZtExIeAHwMPLp2nI4LmSoiVg8MC/vcnDZ+Df57cAWnBImJvmuX+l+BnaDE2oTks8KOIuGfpMFJPTAz+XR388+POW/MWEetGxNHAqYDL2Ev3QODsiHh26SBSh00d/N6HY54sAJqXiNgG+A7w6tJZemYj4LMRcWxE3LF0GKlDHPxLZAHQnAZL/j+juf5Yo3Ew8AMPCUhzcvAPiQVAMxpc3vdumiX/mm7mU8r9aA4J/J/SQaQWcvAPmQVA04qI9YATgdeUzlKZjYBTIuIlpYNILeHgHxELgNYSESuArwD7ls5SqWXAhyLizaWDSAU5+EfMAqDbiYgtgW8Be5TOIo4cnBzof6eqiYN/TNyx6FYRsQPwPZpj0WqHg4GTB4dkpD77OfAsHPxj4wNKBEBE7AR8G6/vb6NnACsi4imZeVPpMNKQ/Rx4M/A5h/54uQIgImJr4Gs4/NtsL+DTHg5Qj5zPbd/4T3H4j587k8pFxKbAV4FtSmfRnJ4JfKh0CGmJJgb/bg7+siwAFYuI9YEvALuUzqJ5OzgijiodQloEB3/LWAAqFRHrACcBDy+dRQv2xoh4eekQ0jw5+FvKAlCvY4Cnlg6hRXt/RDyjdAhpFg7+lrMAVCginge8qHQOLUkAH4+I7UsHkaZw8HeEBaAyg8v9ji2dQ0OxAjgpIu5QOoiEg79zLAAVGTxu9mRgw9JZNDS7A+8uHUJVc/B3lAWgLu8DdisdQkP3ioh4WukQqo6Dv+MsAJWIiP2AF5fOoZH5RER4LweNg4O/JywAFYiILYDjSufQSG0CfKJ0CPWag79nLAB1OJpmQKjf9hhc4SENk4O/pywAPRcRewDPLZ1DY/OeiLDsaRjOB/bFwd9bFoAeG1wedkzpHBqrLYC3lQ6hTps8+H1CX4/5OOB+OxTYuXSIMbgZuAK4fMp2R2CrKdvmNDfR6bODI+ITmXlW6SDqlPNpHsv7eYd+HSwAPRUR2wJvKBxjVH4GnAp8BfgN8If57rAiYl1gS+DewN6D7W4jylnKMuDYiHhIZq4pHUat5+CvlAWgv94GbFA6xJDcDHyLZuiflpmXLPYHZebNwO8G29eAl0bE7sA+g60v90l4IM25HyeUDqLWOg84Cgd/tTwHoIcG94ffr3SOIbiU5pkFf5GZe2XmPy9l+M8kM8/OzCMz877AdsA7geuH/ToF/H1E9P1whxbuPJpj/Pf1GH/dLAD9dASwTukQS7AKeC1wz8z8l8xcNa4XzszfZOZrgR1prqvv8hL6vYCnlw6h1nDw63YsAD0TEVsDzy+dY5FuBN4LbJ+Z78zMG0oFycxLM/Mg4L7Al0rlGILXlQ6g4hz8mpYFoH9eA3Tx6XAnATtl5qGZ+cfSYSZk5vmZ+RTg0cC5heMsxu4R8fjSIVSEg1+zsgD0SERsRnPMvEtuAV6Vmc/OzN+WDjOTzPwW8FDglNJZFsFVgLo4+DUvFoB+eTndOvN/FfCkzHx/6SDzkZnX0Zxc+SagSzvVR0bEQ0uH0Mg5+LUgFoCeGJztfUDpHAtwAfBXmfn10kEWIhtH0exoryudZwEOKh1AI+Pg16JYAPrj0cBflg4xT98AHpKZK0sHWazM/DzwcJr7CXTBvhFxx9IhNFQOfi2JBaA/9i8dYJ6+BDxxnJf2jUpmnkNzXsDlpbPMw8Y0NzpS912Bg19DYAHogYjYAHhG6Rzz8F/AczLzltJBhiUzL6MZrF24cVBXSqJmd66DX8NgAeiHpwMblQ4xh6uBvTPzmtJBhm3w0J0uHGN/XERsUTqEpHawAPRD27/ZrQb2zcyLSgcZlcw8kfY/hnc58JzSISS1gwWg4yLizsBjS+eYw8sz84zSIcbgjcC/lw4xh2eVDiCpHSwA3fdo2v3/48cy87jSIcZhcEz2eUCbr254YES0/XCRpDFo8+DQ/DymdIBZ/A/NQ32qkZn/CxxWOscslgN/XTqEpPIsAN23Z+kAs3hnZv6hdIhxy8wvAN8unWMWe5QOIKk8C0CHRcRWwM6lc8zgMuB9pUMU1OZVAAuAJAtAx7V5R35kZnbh2viRyMwf094HB90/IjYpHUJSWRaAbmvr8f/zgeNLh2iB1wE3lw4xjWXAo0qHkFSWBaDbHlY6wAz+PjPXlA5RWmZeCHykdI4ZtPWzI2lMLAAdFRHLge1L55jGVcCXS4dokeNLB5hBW88dkTQmFoDu2o7mkq62+YLf/m/nbJoTIttmp9IBJJVlAeiuHUsHmMGppQO0yeDmQKeVzjGN7SNi3dIhJJVjAeiuNn6Duw74RukQLdTGUtTWQ0iSxsQC0F1tXAH4Rs2X/s3iDKCNT0FsY4mUNCYWgO5q4867jd90i8vMm4Cvls4xDU8ElCpmAeiuNi7ffrF0gBZr43uzQ+kAksqxAHTXpqUDTHFNZl5VOkSLXVg6wDTa9hmSNEYWgA6KiGXABqVzTHF56QAt18b3x8cCSxWzAHTThkCUDjFFGwdcm1wBZOkQU1gApIpZALqpjTtuC8AsBicCXl06xxRt/BxJGhMLQDdtWDrANCwAc2vbe9TGz5GkMbEAdFMbv7m1bbi1UdveozZ+jiSNiQWgm9q4427bcGujtr1HbfwcSRoTC4AkSRWyAHTTtaUDTGOr0gE6oG3vURs/R5LGxALQTW3ccbdtuLVR296jNn6OJI2JBaCb/lw6wDTaNtzaqG3vURs/R5LGxALQTW385ta24dYqEXEH4C6lc0zRxs+RpDGxAHTTn2nfXeUsALO7K+27e6MFQKqYBaCDMnMNcF3pHFNYAGbXxvfHAiBVzALQXX8qHWCKFRGxeekQLdbGR++27TMkaYwsAN11UekA03hK6QAt1sb3po2PKJY0JhaA7lpZOsA09ikdoI0GJwA+oXSOafyydABJ5VgAuuuC0gGmsVdErF86RAvtAawoHWIabSyRksbEAtBdbdx5bwDsVTpEC7VxZWQ17TyMJGlMLADd1cYVAGjnsCsmIgLYu3SOaVyUmTeXDiGpHAtAd/2a5ltc2zw1Ivxc3WZ3YOvSIabRxhUkSWPkjrqjMrOtS7ibA08qHaJFDigdYAaeAChVzgLQbd8vHWAG73AVACJiB+BFpXPMoK2fHUljUv1OuuNOLx1gBrvQ3m++4/R2YN3SIaaxBvhW6RCSyrIAdNsZpQPM4qiaLwmMiAcD+5bOMYOfZeaq0iEklWUB6LDMvJz2HsvdGnhV6RAFvbt0gFm0uThKGhMLQPd9s3SAWRwREZuVDjFuEfFU4JGlc8zCAiDJAtADbT0PAGBj4B2lQ4xTRNyJdn/7Xw18p3QISeVZALrvTJqTutrqBRHx4tIhxmFw058TgJ1KZ5nFWZnpY4AlWQC6LjP/CPxH6Rxz+GBEPKp0iDH4B+DppUPM4eTSASS1gwWgH/61dIA5rAt8LiK2LZxjZCJiX+CNpXPMYTXwmdIhJLWDBaAf/g1o+7LuZsBpEbFh6SDDFhH3B44HonCUuXw9M68sHUJSO1gAeiAzrwM+XzrHPOwKnNCnuwRGxBbAqTRPQmy7tq8UaX52i4hnDs45kRatNztidWbn/jSalYAVpYMsVUTsAvwAuHvpLPPwPzRFRd13V+AU4D8tAloKC0B/nAlcUjrEPD0Z+OHgXvmdFBH70Az/e5TOMk+nZOYNpUNoqHbFIqAlsAD0RGYmzXHorrgX8OOIeGzpIAsVEa+nOe+iS+czfLx0AI2MRUCLYgHolw8C15UOsQCbAl+NiFeUDjIfEbF+RJwIvJX2n/A32bcz8welQ2jkLAJaEAtAj2TmH4CPlM6xQOsA74+IEyNim9JhZjK4j8EPgP1KZ1mEt5cOoLGyCGheLAD98x7gptIhFmE/YGVEHB0Rdy4dZkJE7BIRX6Q5x+K+heMsxtmZ+bXSIVSERUCzsgD0TGZeBnyydI5FWg94NXBRRBwREXcsFSQi7hYRHwf+k+akxa7y278sApqWBaCf3gncUjrEEmwC/CPwq4h4YURsPK4XjohtI+IfgQuAA+n2fyO/oDlZUQKLgKbo8s5NM8jMi4CTSucYgrvRnNNwVUR8LSIOiYithv0iEXHfiHhTRJwD/AY4Alh/2K9TwDsGV4dIk1kEBFgA+uz1dOuKgNmsCzwOOAa4NCJ+GBGvjYjdFnpDoWj8RUQ8KiLeGxG/Bs6heZBPF4/xz+Qs4NOlQ6jVJorAuRaBOi0vHUCjkZkXR8Rb6d8x4AAeMtjeARAR1wFXTNl+T3NOwV2nbFvQ/8/9GuCQzGzzY6LVHrvQFIHzI+LNwOddOapD33eEtTsa2B/YuXSQEdsA2H6wCY7LzLNKh1DnWAQq4yGAHsvMm4CXlM6hsbqS5vCPtFgTRcBDAz1nAei5zDwDjwXX5DWZuap0CPXC5CKwr0WgfywAdTgUcCj03xmZ+anSIdQ7uwAnYxHoHQtABTLzSuDg0jk0Uqto7lsgjYpFoGcsAJXIzJOAD5fOoZE5MDN/WzqEqmAR6AkLQF1eBZxbOoSG7gOZ+e+lQ6g6FoGOswBUJDNvAJ4F/Ll0Fg3N2cBhpUOoahaBjrIAVCYzVwKHlM6hobgG2G9wuadUmkWgYywAFRqcKf6R0jm0JAkcNHjug9QmFoGOsADU6yXAF0qH0KK9MjM/XzqENAuLQMtZACqVmbcA+wHfK51FC/aWzPxg6RDSPFkEWsoCULHMvB54KnB+6Syat+My88jSIaRFsAi0jAWgcpn5J+AJgNeQt9/ngJeWDiEtkUWgJSwAIjMvAx4P/HfpLJrRN4Dn+ohf9chEETjPIlCGBUDArZcHPhz4deksWsvngad6uZ966j5YBIqwAOhWmXkhTQk4p3QW3eo44FmZeWPpINKITS4Cz7IIjJ4FQLeTmb8HHgWcUTqLOCozD3HZX5W5D3ASFoGRswBoLZl5DfBEmmeBa/zWAC/NzDeVDiIVZBEYMQuApjVYcn428J7SWSpzLbBvZh5TOojUEhaBEbEAaEaZuSYzDwP2Af5UOk8FzgF2z8z/VzqI1EIWgSGzAGhOmXkacH/gR6Wz9NhxwEMz81elg0gtZxEYEguA5iUzfwv8NfDe0ll65lrgbwYn+91QOozUIRaBJbIAaN4y8+bMPJTmkIA3DVq6s2iW/E8sHUTqMIvAIlkAtGCDQwI7AcfQnLGuhVlF8zTGh7jkLw3N1CLgfJuDb5AWJTNXZeZLgQcDPy6dpyMS+CSwU2Ye6/X90khMFIFzLQKz843RkmTm2cBDgYOBPxaO02bnAY/MzAMy08Mn0uhZBObgG6IlG1wu+GGawwL/BFxXOFKbXEKz3P+AzPxu6TBShSwCM/CN0NBk5h8y89XAtsA7gGvKJirqV8D/BXYYLPevLh1IqpxFYIrq3wANX2ZelZmvA7YB/oG6biJ0PvAc4F6Z+fHMvLl0IPXOj4CjcaVtsSYXgf1qLgLV/sU1eoMTBd9MUwReDfxn4Uijshr4IvA0YLfM/Gxm3lI4k/prVWa+BrgHFoGluA9wIhUXger+whq/zLw2M/8pM+8H7Aa8G7iscKxh+AnwCmCrzHxqZp6amVk6lOqQmf89KALbYRFYiokicF5tRaCav6jaITPPy8zDgb8EHktzWdyqsqkW5CLgrcDOmfngzPxgZl5VOpTqlZlXTioC7wWuLxypq+5NZUWg939BtdPgyoHTM/MA4C7Ag4AjgK8B/1sy2xRXAJ+hOaHvHpm5Q2a+MTNXFs4l3c6gCBxKc2jAIrB41RSB3v7F1B2DMnBWZr4rM58AbErz3IE3AV8BfsN47jh4I81JfCcDLwPunZlbZeZzByf0XTyGDNKSTCkC/4RFYLF6XwSWlw4gTTU4c/67gw2AiLgjsCPNvQZ2HmzbARsDGw22DYF1ZvixN9E8eGdi+yNwAfDLSdvF3p1PfZGZVwKvjoh3AYfT3Kxr/bKpOmmiCBwZEUcBp/RlP2EBUCcMnpR37mCbUUSsz22FYDXNsP9zZt408pBSC2Xm77EIDEPvikDvljRUt8y8fnB29EWZ+dvM/KPDX2qKwOBGXdsB78NDA4vVm0MDnQ0uSVq4QRH4OywCS9X5ItC5wJKkpZtUBLYH3g/cUDhSV3W2CHQmqCRp+DLzisx8Fc2KgEVg8TpXBFofUJI0ehaBoelMEWhtMEnS+E0pAh/AIrBYtysCtHDeti6QJKm8QRF4Jc05AhaBxZsoAoeUDjKVBUCSNKPMvHxSEfggFoHFat19dywAkqQ5DYrAK7AI9IYFQJI0b9MUgRsLR9IiWQAkSQs2pQj8MxaBzrEASJIWLTMvy8yXYxHoHAuAJGnJphSBD2ERaD0LgCRpaAZF4GVYBFrPAiBJGrpJRWAHLAKtZAGQJI1MZl46qQgcg0WgNSwAkqSRGxSBl3JbEbipcKTqWQAkSWMzqQhsDxyLRaAYC4AkaewGReAlNCsCFoECLACSpGIy83cWgTIsAJKk4qYUgeOwCIycBUCSQp/TjgAACdBJREFU1BqDInAIFoGRswBIklpnUhG4J/BhLAJDZwGQJLVWZl6SmQdjERg6C4AkqfWmKQI3F47UeRYASVJnTCkCH8EisGgWAElS52TmbzPzxVgEFs0CIEnqrClF4F+wCMybBUCS1HmDIvAiLALzZgGQJPXGpCKwIxaBWVkAJEm9k5kXTyoCH8UisBYLgCSptwZF4IVYBNZiAZAk9d6kIrAT8DFgdeFIxVkAJEnVyMzfZOYLaFYEqi4CFgBJUnUsAu0sAFE6gCRN0rZ9UpYO0CdTisDHqacI5DLgutIpprhL6QCSNEnb9klt22f3wqAI/F+acwRqKAJXLQP+XDrFFFuVDiBJABGxHu0rAG3bZ/dKZv56UhH4BP0tApcuA64tnWIKC4Cktrhr6QDTaNs+u5cGReAg+lsEWlkA7h4RdygdQpKA7UsHmEbb9tm9NqkI7Ey/ikArC8AGwKNLh5Ak4MmlA0yjbfvsKmTmRZOKwPF0vwh8axlwdekU09indABJop37ojbus6sxKAIH0u0i8D/AacuAC0onmcbeEdG2S28kVSQidgW2K51jGm3cZ1dnUhG4F/BJ4JbCkRbilMy8YRnwy9JJpnE34DmlQ0iq2uGlA8ygjfvsamXmhZl5AM2KQFeKwAnQ3ODiYcD3ymaZ1sXAzpl5Y+kgkuoSEfcHzqZ9NwG6JjM3Lh1CM4uIHYA3AM8D1ikcZzpnZOae0NwJsK1tclvgZaVDSKrSO2nf8AdYWTqAZjdlReBfadeKwI3AwRP/Y1lm/hG4qlyeWR01aOKSNBYR8Upgr9I5ZtDWL2yaYlAEnk9zjkBbisBbM/PWc0gmngXw/UJh5rIBcGpEbFk6iKT+i4jHAUeXzjGLtu6rNYPM/NWkInAC5YrAl2lWtm41UQDOGH+Webs78G8RsVHpIJL6KyJ2AU6incdtJ7R5X61ZDIrA/pQpAqcDz8jMmyf/4kQB+OYYgyzGXwHfj4h7lA4iqX8i4sk0J0NvUjrLLC7PTM8B6LhJReDejKcInAHsnZk3TP2NiQJwPvCHEYdYql2An0TEo0sHkdQP0TgcOA1YUTrPHPz23yOZecGkIvAphl8EVgNHAntl5rRPkFw2CJJ048N1F+CbEfHZiGjjDTokdUREPAb4Cc1x0WVz/Ott0PaVWi3CoAj8LcMtAj8HHpGZb8nMGX9eNLMfIuJ5DG4O0BE3Ax8Bjs/Ms0qHkdR+g8f7PgZ4JfC4wnEW4hZg68y8snQQjVZEbA+8EHg+sJAT4BP4OvA+4Gs5Mdxne61JBWAD4Epgw4UGboFLgVOB7wCXA5cBV2Tm9UVTSSomIjalebz4VjT3FXn8YOviPu4rmfmk0iE0PhGxHHgSTVHdmebkwa0Gv70GuAG4hObKkO8BZ2bmrxf0GpNLQkQcT9M6JEnt8TeZeWLpECorItYH1gzrDrlTC8CeNJcLSJLa4RpgS1c0NWxTT3w5E/hdgRySpOmd4vDXKNyuAGTmGuC4QlkkSWs7pnQA9VNMPVEwIlbQnFjgE6ckqayvZuYTS4dQP6117WtmXgP8c4EskqTbe1vpAOqvtVYAACJiM+Bi4E7jDiRJAuDbmfmo0iHUX9Pe/Soz/wB8eMxZJEm3eWvpAOq3aVcAACLizsBKYLOxJpIkeeMfjdyM97/OzD8Ch48xiySpucPby0qHUP/N9QCM42luMShJGo+3L/SWrtJizHgI4NZ/IWJX4KfA8rEkkqR6XQDsNqxbvUqzmfMRmJl5HvCuMWSRpJqtAV7s8Ne4zPcZ2G/CQwGSNEpvycwzS4dQPeY8BHDrvxhxN+Ac4C4jTSRJ9TkDeOzgduzSWMx3BYDMvBTYH5hfY5AkzceVwHMc/hq3eRcAgMz8MvCPI8oiSbVZDTw3M39fOojqs6ACMPB64NPDDiJJFXpBZp5eOoTqtOACkM1JAwcCXx9+HEmqxhGZ+cnSIVSveZ8EuNYfjNiQ5sSVBw41kST13/sy8+9Kh1DdFl0AACJic5oScJ+hJZKkfjseOCiXsvOVhmAx5wDcKjOvAv4a+O5w4khSr70Hh79aYkkFACAz/wTsBZy69DiS1EsJvCYzD3P4qy2WdAjgdj8oYh3gOOAFQ/mBktQPNwMHZqZXT6lVlrwCMCEzb8nMFwKvAG4a1s+VpA67FNjT4a82GtoKwO1+aMTuwMnAdkP/4ZLUDV8G9s/Mq0sHkaYztBWAyTLzbOABwOdG8fMlqcVWA0cAT3H4q81GsgJwuxeIeD7wbmDzkb6QJJX3U+DgzPxJ6SDSXEayAjDZ4E5XO9GcIOjDLiT10SrgZcCDHP7qipGvANzuxSIeBByDdw+U1A8JfAo4LDOvLB1GWoiRrwBMNmjGDwaeDpw9zteWpCFaQ3Oi8/0yc3+Hv7porCsAa714xBOANwAPLxZCkuZvNfAZ4O2ZubJ0GGkpihaAW0NEPILmCYPPBFYUjiNJU11Ms9T/scy8uGwUaThaUQAmRMT6wNOA/WluL7xO2USSKrYKOAU4Afiut/BV37SqAEw2eNLgYwbbnnhTIUmjdQvNZXynA/9BM/RvLBtJGp3WFoCpImJbmiJwP2DHwbYNYz6RUVIv3ABcBKwELgB+BJyZmauKppLGqDMFYDoRsR6wA00RWAFsCGw0aVu3XDpJBSXNkL8W+PPgn9fSLOtfCFySmd6XRFXrdAGQJEmL4/K5JEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUIQuAJEkVsgBIklQhC4AkSRWyAEiSVCELgCRJFbIASJJUof8PZbLopOA5d/wAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default styled(VideoIcon)``;
