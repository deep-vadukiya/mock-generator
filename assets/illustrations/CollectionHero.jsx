//

import * as React from "react";

// ------------------------------------------------

export const CollectionHero = (props) => {
  let hei = props?.height ?? 449.4884;
  let wid = props?.width ?? 861.67538;

  const viewBoxVal = `0 0 ${wid} ${hei}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      width={wid}
      height={hei}
      viewBox={viewBoxVal}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <path
        d="M432.279,249.73146c3.25253-10.36569,10.64889-19.87273,20.87789-23.3769,10.2296-3.50417,25.20831,1.83382,32.89868,9.49817,14.06717,14.01962,17.50009,62.18213,7.83536,77.402-1.92235-.10176-8.55563-.177-10.50127-.24989l-2.75233-9.17342v9.083c-15.18626-.46932-30.99655-.17547-46.81541.12842C432.404,302.267,429.02642,260.09715,432.279,249.73146Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <path
        d="M582.61639,410.11236a9.42919,9.42919,0,0,1-7.72985-12.21882L548.082,377.78581l16.3913-5.87582,22.94107,19.99547a9.48031,9.48031,0,0,1-4.798,18.2069Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#9e616a"
      />
      <path
        d="M476.13585,304.71849l2.56441-9.07324s6.39538-2.08516,17.30823,5.82965,78.27677,78.56428,78.27677,78.56428l-20.05535,2.8041L492.93453,339.0551Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e6e6e6"
      />
      <path
        d="M895.801,651.26736c41.02405-20.94844,73.68547-62.95142,72.78461-109.00518a212.23047,212.23047,0,0,1-136.96,49.73437c-19.31826-.11034-40.79335-2.24455-55.80724,9.91254-9.34216,7.56424-14.23947,19.54694-15.689,31.47937-1.44929,11.933.17747,24.00119,1.80212,35.91166l-1.00815,2.82636C806.87831,675.27951,854.77689,672.21579,895.801,651.26736Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#f0f0f0"
      />
      <path
        d="M967.62548,542.15064c-17.86955,33.22541-46.46938,60.95717-80.563,77.23966-7.371,3.52024-15.15457,6.44975-23.29328,7.515a44.80358,44.80358,0,0,1-23.33655-3.37936c-6.90132-2.83687-13.6321-6.53788-21.10285-7.64775-7.87456-1.16986-15.40208,1.40938-21.5076,6.3859-7.47027,6.0889-12.30719,14.49887-16.75149,22.88749-4.93454,9.314-9.91242,19.06645-18.62812,25.42938-1.056.771.202,2.36448,1.25642,1.59468,15.16382-11.0704,18.81521-31.01992,31.23088-44.41086,5.79339-6.24845,13.50492-10.78886,22.27084-10.0876,7.66542.61322,14.60952,4.4238,21.57244,7.35659,7.31117,3.07949,14.72477,4.78406,22.695,4.15447,8.15309-.644,16.06763-3.27541,23.49626-6.59176a175.99016,175.99016,0,0,0,45.88086-30.33935,184.61661,184.61661,0,0,0,38.66993-49.3637c.61727-1.14771-1.27651-1.883-1.88975-.74282Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M898.4237,614.68238a27.21576,27.21576,0,0,0,33.86915,9.73905c1.18859-.54176.40256-2.4142-.7876-1.87172a25.20123,25.20123,0,0,1-31.48687-9.12375c-.71789-1.09142-2.30847.17125-1.59468,1.25642Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M843.74247,625.42525A52.45613,52.45613,0,0,1,864.14132,593.094c1.05326-.77467-.20443-2.36842-1.25642-1.59468a54.56237,54.56237,0,0,0-21.15847,33.68672c-.24333,1.2861,1.774,1.5183,2.016.23919Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M944.00521,577.01433a15.40543,15.40543,0,0,1-4.28744-13.97506c.25951-1.28238-1.75821-1.51322-2.016-.23919a17.26306,17.26306,0,0,0,4.7088,15.47067,1.0492,1.0492,0,0,0,1.42555.16913,1.02022,1.02022,0,0,0,.16913-1.42555Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M846.48058,445.23648c-.18482.79613-.36964,1.59226-.5703,2.395a202.88051,202.88051,0,0,1-10.17994,31.29624c-.315.78911-.6461,1.58408-.98311,2.36249a213.88169,213.88169,0,0,1-43.90732,65.36748,207.70525,207.70525,0,0,1-23.784,20.74325c-11.66,8.70163-24.9948,17.20868-32.86751,28.90961a35.63082,35.63082,0,0,0-2.27329,3.77907l25.63832,70.5877c.13877.13118.2618.269.40086.40093l.89479,2.86515c.45812-.29457.92693-.60993,1.385-.9045.26645-.16977.5272-.35527.79365-.525.17583-.11816.35147-.23714.51689-.33372.05867-.03911.11706-.079.15971-.1123.16541-.09658.30881-.20385.45811-.29457q3.93808-2.63334,7.85285-5.33121c.01612-.00585.01612-.00585.02653-.02743,19.85077-13.755,38.7276-29.28811,54.6467-47.19254.47877-.53884.97394-1.08275,1.441-1.65383a198.19788,198.19788,0,0,0,19.30357-25.95194,175.21986,175.21986,0,0,0,8.56212-15.52423,145.70421,145.70421,0,0,0,13.22357-43.59486c4.1715-30.17223-1.35305-61.34272-19.34552-85.43366C847.4126,446.44764,846.95741,445.84659,846.48058,445.23648Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#f0f0f0"
      />
      <path
        d="M845.64231,445.72058c5.73616,37.28733-.40277,76.64866-17.82142,110.176-3.76588,7.24854-8.21689,14.27386-14.07382,20.0245a44.80364,44.80364,0,0,1-20.66753,11.352c-7.21831,1.89-14.82073,2.98733-21.45392,6.59907-6.99173,3.807-11.44915,10.39843-13.32786,18.04784-2.29865,9.35927-1.09728,18.98632.40472,28.35994,1.6677,10.40761,3.56481,21.19145.43674,31.51935-.379,1.25136,1.58485,1.76629,1.96329.51681,5.4423-17.96876-3.65326-36.09573-1.8023-54.26273.86369-8.47706,4.28728-16.7452,11.70858-21.463,6.48961-4.12549,14.32832-5.26378,21.65356-7.11427,7.69163-1.943,14.63724-5.04553,20.622-10.34685,6.122-5.423,10.85709-12.28906,14.79176-19.40952A175.99,175.99,0,0,0,846.443,507.872a184.61665,184.61665,0,0,0,1.15542-62.69612c-.19814-1.288-2.15294-.735-1.95609.54466Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M834.05768,545.29736a27.21577,27.21577,0,0,0,32.90621-12.61548c.62284-1.14817-1.1321-2.17-1.75577-1.02027a25.2012,25.2012,0,0,1-30.63362,11.67246c-1.23031-.43921-1.74009,1.52659-.51682,1.96329Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M796.86573,586.79682a52.45618,52.45618,0,0,1-3.17829-38.09619c.37457-1.25267-1.58918-1.768-1.96329-.51681a54.56237,54.56237,0,0,0,3.38788,39.63582c.58,1.17338,2.33058.14419,1.7537-1.02282Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M847.7732,487.77832a15.40547,15.40547,0,0,1-11.83724-8.577c-.56486-1.18015-2.31489-.14966-1.75369,1.02281a17.26307,17.26307,0,0,0,13.07411,9.51745,1.04921,1.04921,0,0,0,1.24006-.72324,1.02022,1.02022,0,0,0-.72324-1.24Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M402.38154,318.15783c-35.14224-29.77973-86.48885-43.72765-128.63687-25.14527a212.23054,212.23054,0,0,1,98.68186,107.2075c7.34429,17.86809,13.65243,38.50645,30.65717,47.67436,10.58064,5.70471,23.52509,5.605,35.09422,2.3432,11.56962-3.26221,22.07825-9.41486,32.44221-15.5048l2.99655-.15915C458.813,390.9542,437.52379,347.93757,402.38154,318.15783Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#f0f0f0"
      />
      <path
        d="M274.01181,293.94145c37.54583,3.68226,74.15843,19.38319,102.324,44.56645,6.08932,5.44456,11.79261,11.49758,15.9126,18.59681a44.80372,44.80372,0,0,1,5.87669,22.83592c.04239,7.46152-.77831,15.09876,1.07714,22.42,1.95573,7.717,7.23712,13.66874,14.18244,17.38433,8.49779,4.54612,18.12229,5.76773,27.57577,6.63528,10.49627.96324,21.41388,1.79746,30.64457,7.38715,1.11843.67727,2.10392-1.09775.98719-1.774-16.05982-9.7251-35.87527-5.40493-53.017-11.69982-7.99867-2.9373-15.1606-8.3029-17.8923-16.66179-2.38875-7.30948-1.54917-15.18579-1.5268-22.74112.02348-7.93321-1.26118-15.431-4.9142-22.54269-3.73683-7.27488-9.21549-13.56363-15.13891-19.14a175.99025,175.99025,0,0,0-45.67956-30.64159,184.61664,184.61664,0,0,0-60.45451-16.655c-1.297-.1272-1.24553,1.90368.043,2.03Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M367.61252,329.83919a27.21578,27.21578,0,0,0-4.06813-35.006c-.958-.88792-2.38283.5591-1.42352,1.4482a25.20121,25.20121,0,0,1,3.71765,32.57061c-.73038,1.0831,1.0478,2.06409,1.774.98718Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M398.60184,376.1545a52.45611,52.45611,0,0,1-37.69564-6.36079c-1.12079-.67328-2.10662,1.10153-.98719,1.774A54.56234,54.56234,0,0,0,399.1582,378.107c1.28052-.27119.71721-2.22217-.55636-1.95246Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M315.28591,302.29862a15.40541,15.40541,0,0,1-11.24265,9.34276c-1.28332.25482-.71861,2.20561.55636,1.95245a17.263,17.263,0,0,0,12.46029-10.308,1.04919,1.04919,0,0,0-.3934-1.38059,1.02023,1.02023,0,0,0-1.3806.3934Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M231.28064,443.08061c.80585-.13632,1.6117-.27265,2.42979-.39692a202.88025,202.88025,0,0,1,32.80181-2.66959c.84955-.01351,1.71071-.0144,2.55888-.00346a213.88173,213.88173,0,0,1,77.24043,15.31917,207.705,207.705,0,0,1,28.30783,13.95087c12.52355,7.40507,25.51308,16.4305,39.34438,19.18485a35.63228,35.63228,0,0,0,4.36329.641l55.25135-50.86486c.06755-.17861.14727-.34525.21544-.52443l2.29888-1.93c-.44839-.30918-.92009-.62021-1.36848-.92939-.25935-.18043-.531-.34952-.79037-.52995-.1768-.1167-.35429-.23291-.50716-.34832-.05871-.03906-.118-.07756-.16519-.10408-.15287-.11541-.30713-.20639-.44838-.30918q-3.94779-2.61879-7.94611-5.19119c-.01162-.01262-.01162-.01262-.03554-.0139-20.34354-13.01514-41.95237-24.44625-64.60926-32.23415-.68174-.23408-1.37449-.48135-2.08147-.6922a198.1986,198.1986,0,0,0-31.38711-7.809,175.21477,175.21477,0,0,0-17.62491-1.91681,145.70413,145.70413,0,0,0-45.32328,4.60156c-29.44875,7.78053-56.08133,24.89268-71.3757,50.78059C232.039,441.75377,231.65981,442.40546,231.28064,443.08061Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#f0f0f0"
      />
      <path
        d="M232.05044,443.66751c32.19522-19.6651,70.88136-29.17211,108.532-26.02228,8.14.681,16.33808,2.08021,23.90189,5.268a44.80358,44.80358,0,0,1,18.441,14.695c4.52621,5.93208,8.46907,12.5241,14.35845,17.25263,6.20773,4.98412,14.008,6.55648,21.79045,5.34161,9.52209-1.48644,17.94221-6.30567,26.01261-11.30462,8.96063-5.55039,18.18-11.45747,28.91555-12.55193,1.30076-.1326,1.01894-2.1432-.27986-2.01079-18.678,1.90417-31.89853,17.28385-49.37523,22.57827-8.155,2.47048-17.10382,2.49833-24.31756-2.5311-6.30809-4.398-10.37982-11.1923-14.91079-17.23827-4.75759-6.34837-10.2975-11.56147-17.496-15.0404-7.36362-3.55875-15.52429-5.28143-23.61117-6.16754a175.9902,175.9902,0,0,0-54.92092,3.03666,184.61663,184.61663,0,0,0-58.297,23.09969c-1.11213.6793.15167,2.26987,1.25654,1.595Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M328.39828,415.97576a27.21578,27.21578,0,0,0-24.3242-25.501c-1.29952-.13216-1.56594,1.881-.26469,2.01336a25.20121,25.20121,0,0,1,22.57809,23.76752c.06894,1.30454,2.07934,1.01722,2.0108-.27985Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M381.02654,434.29823a52.45618,52.45618,0,0,1-33.9275,17.61664c-1.30025.13721-1.01883,2.14784.27985,2.0108a54.56242,54.56242,0,0,0,35.26738-18.40349c.85915-.98748-.76525-2.20608-1.61973-1.224Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M270.03709,425.49038a15.40546,15.40546,0,0,1-3.35165,14.22853c-.87123.9761.75417,2.19371,1.61974,1.224a17.263,17.263,0,0,0,3.7427-15.73233,1.04919,1.04919,0,0,0-1.14532-.86547,1.02022,1.02022,0,0,0-.86547,1.14532Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M775.74263,496.40425a10.86867,10.86867,0,0,0-9.64981-10.18554L609.03246,468.49663a10.86758,10.86758,0,0,0-4.47835.42586l-36.02953,11.28066L547.85225,486.682l-38.15061,11.94216a10.90282,10.90282,0,0,0-7.62019,10.94758l6.43983,153.07549a10.95048,10.95048,0,0,0,9.1506,10.20163l160.36544.34962a10.58461,10.58461,0,0,0,2.27875.12131,10.87384,10.87384,0,0,0,3.24825-.66376l93.97365-.64928a10.85009,10.85009,0,0,0,7.07981-10.84764Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M519.18537,663.43589l160.36433.34663a1.36707,1.36707,0,0,0,.69815-.0646l93.96141-.64475a1.34623,1.34623,0,0,0,.88746-1.35915l-8.864-164.75867a1.37851,1.37851,0,0,0-1.2039-1.27337l-1.05714-.12444L607.96165,477.9727a1.03349,1.03349,0,0,0-.21533-.006,1.352,1.352,0,0,0-.34652.055l-87.87745,27.51975-6.97463,2.1781a1.37617,1.37617,0,0,0-.948,1.36607l6.44235,153.07A1.36736,1.36736,0,0,0,519.18537,663.43589Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M519.52235,505.54146l87.87745-27.51975a1.352,1.352,0,0,1,.34652-.055,1.03349,1.03349,0,0,1,.21533.006l156.01007,17.58484-37.57293,12.22661-14.063,4.56848-40.01366,13.01192a2.9567,2.9567,0,0,1-.35985.07186c-.07741-.0065-.15482-.013-.24738-.01776Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <path
        d="M517.671,672.85725l160.36433.34663a10.24309,10.24309,0,0,0,2.28218.107,11.007,11.007,0,0,0,3.254-.64823l93.96142-.64475a10.87238,10.87238,0,0,0,7.08629-10.8563l-8.87911-164.75694a10.95589,10.95589,0,0,0-1.79947-5.40757c-.147-.21319-.29413-.42645-.45465-.62274a10.6518,10.6518,0,0,0-4.22759-3.30476,10.877,10.877,0,0,0-3.16457-.84964l-.18686-.02468L609.04007,468.49383a13.64615,13.64615,0,0,0-1.92353-.05605,10.79713,10.79713,0,0,0-2.56628.49291l-36.02621,11.2675-20.66814,6.48957-38.15773,11.94078a10.806,10.806,0,0,0-4.18376,2.44169,2.02539,2.02539,0,0,0-.26341.24478,1.81629,1.81629,0,0,0-.1626.18737,10.892,10.892,0,0,0-3.00462,8.05812l6.42893,153.08693A10.96222,10.96222,0,0,0,517.671,672.85725ZM504.79925,509.434a8.07536,8.07536,0,0,1,1.04769-4.38346,7.08754,7.08754,0,0,1,.79878-1.19568,8.1021,8.1021,0,0,1,3.12065-2.35071,6.18187,6.18187,0,0,1,.73617-.26824l64.2473-20.10868,30.6182-9.606c.20667-.0697.40175-.10736.59511-.16009a7.62788,7.62788,0,0,1,1.43475-.1948,6.3151,6.3151,0,0,1,1.32271.03275l157.05378,17.72616c.12461.01646.234.03455.35856.051a7.951,7.951,0,0,1,3.9113,1.74583,8.01374,8.01374,0,0,1,2.982,5.82443L781.892,661.32024a8.15089,8.15089,0,0,1-5.29624,8.13618l-93.97656.64657a8.24889,8.24889,0,0,1-4.15672.39876l-160.36259-.33147a8.23193,8.23193,0,0,1-6.85656-7.65113Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <path
        d="M680.80361,673.61347a1.36188,1.36188,0,0,1-1.4281-1.27912l-8.83819-148.18458a1.36226,1.36226,0,0,1,1.27849-1.4405l.0124-.00062a1.36187,1.36187,0,0,1,1.4281,1.27911l8.83819,148.18459a1.36225,1.36225,0,0,1-1.27849,1.44049Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <path
        d="M736.24579,663.58964l-15.38634-.1043L706.25957,511.46321s18.48158-7.55927,19.29189-6.273C726.04463,505.95625,736.18915,662.64716,736.24579,663.58964Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <path
        d="M770.84259,492.01859l-1.11035-.90918a7.614,7.614,0,0,0-4.0083-1.6875L608.67218,471.69633a7.9158,7.9158,0,0,0-2.59326.14355l-.58838.14551-.11866-2.34961,26.0459-28.8125a14.989,14.989,0,0,1,12.38282-4.85742L749.973,445.35941a14.8537,14.8537,0,0,1,13.26465,11.69043Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <path
        d="M533.46381,607.95864a2.30539,2.30539,0,0,1,.507-.02533l48.33731,2.92959a2.28586,2.28586,0,0,1-.2755,4.56342l-48.33731-2.92958a2.28624,2.28624,0,0,1-.23148-4.5381Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M534.27387,624.93933a2.30478,2.30478,0,0,1,.507-.02533l48.33731,2.92959a2.28586,2.28586,0,0,1-.2755,4.56342l-48.33731-2.92959a2.28623,2.28623,0,0,1-.23148-4.53809Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M765.472,422.18019l-93.23976,50.76555-38.30757-70.3585,93.23976-50.76555Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M765.472,422.18019l-93.23976,50.76555-38.30757-70.3585,93.23976-50.76555ZM673.01348,470.2971,762.82339,421.399l-36.44014-66.92864-89.80991,48.89813Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e6e6e6"
      />
      <rect
        id="b82aa17c-2bd1-4dd4-b063-2892a3259be6"
        data-name="Rectangle 342"
        x={653.14418}
        y={396.0502}
        width={78.15827}
        height={5.21062}
        transform="translate(-275.52143 154.2836) rotate(-28.56664)"
        fill="#6c63ff"
      />
      <rect
        id="bd7e3eb5-3d7e-4ea2-8dab-23e6077e8725"
        data-name="Rectangle 343"
        x={660.61854}
        y={409.77815}
        width={78.15827}
        height={5.21062}
        transform="translate(-281.17595 159.52891) rotate(-28.56664)"
        fill="#6c63ff"
      />
      <rect
        id="e4c2d8ec-e50a-4e03-bbe3-57c6894f2519"
        data-name="Rectangle 344"
        x={668.0934}
        y={423.50704}
        width={78.15827}
        height={5.21062}
        transform="translate(-286.83086 164.77458) rotate(-28.56664)"
        fill="#6c63ff"
      />
      <path
        d="M650.87881,455.98121"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M552.99944,360.17817c-.96346-1.07939-1.2917-1.1894-1.63366-.95346l-53.0599,36.6089c-.33814.2333-.35827.578.29834,1.84674,1.7343,2.6843,3.854,5.85412,6.17405,9.21668l68.26843,98.94631c6.399,9.27457,11.95862,16.57656,12.39175,16.27772l53.05989-36.6089c.43315-.29885-4.41974-8.08843-10.81877-17.363l-68.26843-98.94631C557.09637,365.8479,554.89069,362.74857,552.99944,360.17817Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M560.06793,369.43949c-1.20626-1.69142-2.3555-3.25956-3.38244-4.626-1.23612-1.63717-2.24914-2.93474-3.01814-3.86232-.2532-.302-.47116-.561-.66791-.773-.96346-1.07939-1.2917-1.1894-1.63366-.95346l-53.0599,36.6089c-.33814.2333-.35827.578.29834,1.84674q.20217.39049.49865.9178c.59159,1.04437,1.445,2.452,2.5394,4.19263,1.83115,2.89785,4.2398,6.5189,6.78,10.20061l64.82905,93.96138c2.94395,4.26687,5.79841,8.22524,8.0359,11.15118,3.72566,4.87155,3.99923,4.68279,4.41337,4.39706l53.05989-36.6089c.41416-.28575.68771-.47449-2.544-5.68682-1.94114-3.13041-4.62843-7.20413-7.57237-11.471L563.815,374.77291C562.54363,372.93017,561.27537,371.12448,560.06793,369.43949ZM509.18218,412.4671c-2.53234-3.6703-4.93575-7.28377-6.75642-10.16644-1.0903-1.72655-1.9347-3.12924-2.51581-4.15842a12.6419,12.6419,0,0,1-.8594-1.70078l52.61914-36.3048a12.63735,12.63735,0,0,1,1.285,1.40717q.57172.68233,1.32458,1.64343.74905.96377,1.67,2.18469c2.04863,2.72538,4.571,6.25116,7.106,9.92526l64.829,93.96138c6.15263,8.91744,9.69712,14.79443,10.13542,16.023l-52.62675,36.31c-.993-.84589-5.229-6.24578-11.38164-15.16322Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M541.655,390.612l-10.04586,6.93118a2.30889,2.30889,0,0,0-.589,3.21048l6.00318,8.70084a2.31185,2.31185,0,0,0,3.21048.589l10.04586-6.93118a2.31482,2.31482,0,0,0,.589-3.21048l-6.00318-8.70084A2.31186,2.31186,0,0,0,541.655,390.612Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M566.68266,400.1848l-35.0123,24.15688a1.04785,1.04785,0,1,0,1.19015,1.725l35.01229-24.15688a1.04785,1.04785,0,1,0-1.19014-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M547.75782,419.20916l-13.29822,9.17516a1.04786,1.04786,0,0,0,1.19016,1.725l13.29822-9.17517a1.04786,1.04786,0,0,0-1.19016-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M567.60755,428.22692,557.5617,435.1581a2.30888,2.30888,0,0,0-.589,3.21048l6.00318,8.70084a2.31185,2.31185,0,0,0,3.21048.589l10.04586-6.93118a2.31483,2.31483,0,0,0,.589-3.21048l-6.00319-8.70085A2.31186,2.31186,0,0,0,567.60755,428.22692Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M592.63524,437.79973l-35.01229,24.15689a1.04786,1.04786,0,0,0,1.19016,1.725l35.01229-24.15688a1.04786,1.04786,0,0,0-1.19016-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M573.71042,456.82412l-13.29822,9.17516a1.04786,1.04786,0,1,0,1.19016,1.725l13.29822-9.17516a1.04786,1.04786,0,0,0-1.19016-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M593.56015,465.84187l-10.04585,6.93118a2.30892,2.30892,0,0,0-.589,3.21049l6.00318,8.70084a2.31186,2.31186,0,0,0,3.21049.589l10.04585-6.93118a2.31484,2.31484,0,0,0,.589-3.21049l-6.00319-8.70084A2.31189,2.31189,0,0,0,593.56015,465.84187Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M618.58785,475.41469l-35.0123,24.15688a1.04786,1.04786,0,0,0,1.19016,1.725L619.778,477.13968a1.04786,1.04786,0,1,0-1.19015-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M599.663,494.43908l-13.29821,9.17516a1.04786,1.04786,0,1,0,1.19016,1.725l13.29821-9.17516a1.04786,1.04786,0,0,0-1.19016-1.725Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M711.03731,404.34812c-.21-5.15-.53-8.47-.9-8.47h-135.4c-.37,0-.69,3.32-.9,8.47-.14,3.59-.23,8.07-.23,12.92005v94.34l.55005.07,22.26,2.9,23.19995,3.04,10.6,1.38,22.67,2.96,18.83,2.46c.09.01.17.01.25.02.12-.02.24-.04.35-.07l7.41-2.41,8.55-2.78,22.44-7.3.55-.18v-94.43C711.26729,412.41813,711.17727,407.93815,711.03731,404.34812Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#fff"
      />
      <path
        d="M711.48726,402.11814c-.06994-1.34-.13995-2.42-.22-3.28a17.03323,17.03323,0,0,0-.38-2.67c-.22-.84-.47-.84-.75-.84h-135.4c-.28,0-.53,0-.75.84a19.67861,19.67861,0,0,0-.38,2.8c-.06995.84-.14,1.87994-.21,3.15-.22,4.05-.34,9.43-.34,15.15v94.26l.55.07995.55005.07v-94.41c0-4.98.09-9.2.22-12.53a58.31022,58.31022,0,0,1,.67-8.32h134.79a58.09383,58.09383,0,0,1,.67,8.31c.12,3.33.21,7.55.21,12.54v94.61l1.1-.36v-94.25C711.81728,411.54814,711.69729,406.16813,711.48726,402.11814Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M616.34731,424.63816h-17.27a3.26272,3.26272,0,0,0-3.27,3.26v14.96a3.26489,3.26489,0,0,0,3.27,3.27h17.27a3.27123,3.27123,0,0,0,3.27-3.27v-14.96A3.26908,3.26908,0,0,0,616.34731,424.63816Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M687.5873,430.42814h-60.2a1.48,1.48,0,0,0,0,2.96h60.2a1.48,1.48,0,0,0,0-2.96Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M650.24727,437.37815h-22.86a1.48,1.48,0,0,0,0,2.96h22.86a1.48,1.48,0,1,0,0-2.96Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M616.34731,468.91813h-17.27a3.27128,3.27128,0,0,0-3.27,3.27v14.96a3.27123,3.27123,0,0,0,3.27,3.27h17.27a3.27762,3.27762,0,0,0,3.27-3.27v-14.96A3.27767,3.27767,0,0,0,616.34731,468.91813Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M687.5873,474.70817h-60.2a1.485,1.485,0,0,0,0,2.97h60.2a1.485,1.485,0,0,0,0-2.97Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M650.24727,481.65812h-22.86a1.485,1.485,0,0,0,0,2.97h22.86a1.485,1.485,0,1,0,0-2.97Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M619.1473,514.79814a3.25135,3.25135,0,0,0-2.8-1.59h-17.27a3.25312,3.25312,0,0,0-2.66,1.37l23.19995,3.04v-1.15A3.18225,3.18225,0,0,0,619.1473,514.79814Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#6c63ff"
      />
      <path
        d="M687.5873,518.99815h-57.37l22.67,2.96h26.84l8.55-2.78A1.34035,1.34035,0,0,0,687.5873,518.99815Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e4e4e4"
      />
      <path
        d="M771.93728,492.91813a1.61628,1.61628,0,0,1-.35.17l-4.97,1.61-40.22,13.09-14.06,4.56-.52.17005-1.1.36-22.44,7.3-8.55,2.78-7.41,2.41c-.11.03-.23.05-.35.07-.08-.01-.16-.01-.25-.02l-18.83-2.46-22.67-2.96-10.6-1.38-23.19995-3.04-22.26-2.9-.55005-.07-.55-.07995-66.41-8.67005-.56-.07995a.98785.98785,0,0,1-.37-.11005,1.37323,1.37323,0,0,1-.8-1.42,1.32551,1.32551,0,0,1,.27-.67c.06-.06.11-.12.17-.17.05-.03.11-.09.17-.12a1.3129,1.3129,0,0,1,.92-.22l3.32.44,63.29,8.27.55.06994.55005.07,32.79,4.29,12.2,1.59,32.11,4.2,20.51,2.68,8.25-2.68,26.24-8.53,4.46-1.45.55-.18.55-.18,13.73-4.46,40.84-13.29,3.66-1.18994.71-.23a1.36366,1.36366,0,0,1,1.62.67,1.32565,1.32565,0,0,1,.09.21A1.37489,1.37489,0,0,1,771.93728,492.91813Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <path
        d="M633.84552,586.959a17.01991,17.01991,0,0,1-2.62256-.20312L530.81817,571.07523a17.23021,17.23021,0,0,1-14.15332-13.48632l-11.20556-54.38965.68994.084,167.84765,20.29-24.5415,53.39844A17.234,17.234,0,0,1,633.84552,586.959Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#3f3d56"
      />
      <polygon
        points="290.396 424.717 302.623 422.167 298.61 373.792 280.564 377.555 290.396 424.717"
        fill="#9e616a"
      />
      <path
        d="M454.15656,644.80266l3.6552,29.69824.00735.06017.28569-.06017,8.39293-1.75223-.1579-8.51316,5.67045,7.37,5.42992-1.12806V670.47l10.9645-2.2862.88755-.18048,3.3842-.70693,2.34647-.48885a5.29157,5.29157,0,0,0,3.08309-8.43043,5.43186,5.43186,0,0,0-1.53384-1.33109c-.07527-.03759-.15055-.08271-.22583-.12035H496.339c-.1131-.06013-.22584-.11278-.34592-.16543L495.79,656.67l-3.58727-1.51162-.01506-.00753L482.7192,651.165l-7.74591-3.2639-1.72221-8.28-2.06812.564-12.93532,3.50451Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <polygon
        points="206.364 385.222 215.86 393.337 251.676 360.573 237.662 348.597 206.364 385.222"
        fill="#9e616a"
      />
      <path
        d="M361.7446,629.90229l6.64032-5.33516-2.35513,8.99053,17.869,15.27112a5.16846,5.16846,0,0,0,1.78259,1.00387,5.34538,5.34538,0,0,0,1.52747.25889,5.28287,5.28287,0,0,0,5.23576-6.63348L386.594,621.40634l5.49865-6.42878-1.71149-1.28931-10.688-8.08912-3.3806-2.55617L355.01,624.13845Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <polygon
        points="254.395 192.062 313.26 189.798 315.475 130.072 265.735 131.669 254.395 192.062"
        fill="#9e616a"
      />
      <circle cx={298.4079} cy={36.4127} r={22.41736} fill="#9e616a" />
      <path
        d="M448.22333,241.98063l25.81143-12.92442,0,0a32.44233,32.44233,0,0,1,19.00144,26.879l.64336,7.70632L482.871,260.89013l-1.18416-9.854-1.83548,9.08538-4.98806-1.26915.04743-15.29834-4.99118,15.28742-17.81525-4.093Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <path
        d="M483.55477,401.46977s19.612,34.088.67779,85.80784l-26.77571,68.27531-46.523,47.081-25.00216-14.78009,46.48566-39.4127L411.6866,478.16647a122.13342,122.13342,0,0,1-4.32486-49.17423c1.494-12.358,12.64648-22.001,20.27555-33.66408C453.11246,411.75979,482.4548,409.11621,483.55477,401.46977Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#2f2e41"
      />
      <polygon
        points="288.327 313.032 305.783 394.118 280.532 398.879 266.152 330.714 288.327 313.032"
        fill="#2f2e41"
      />
      <path
        d="M451.14072,291.5817l28.98361.38635,9.433,11.978,0,0a23.61207,23.61207,0,0,1,17.84656,18.95546l.88989,5.1425a46.06411,46.06411,0,0,1-5.52237,30.93083l0,0-17.6943,16.702.76722,1.39443a3.1932,3.1932,0,0,1-.96269,4.15258l0,0h0a6.52357,6.52357,0,0,1,.17925,4.29326l-.3741,1.23614s9.92036,2.63708-51.28283-6.44762a6.03415,6.03415,0,0,1-5.09387-5.18269h0a4.50556,4.50556,0,0,1-.83433-5.19148l.12467-.24932-.62846-.74016a4.84556,4.84556,0,0,1-.24524-5.9583h0l-.1607-35.07206a22.41468,22.41468,0,0,1,15.53361-24.50387l0,0Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e6e6e6"
      />
      <path
        d="M533.5839,441.51754a9.42918,9.42918,0,0,0-11.18364-9.16387l-16.6846-29.059-7.83315,15.55127,17.04489,25.21077a9.48032,9.48032,0,0,0,18.6565-2.53914Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#9e616a"
      />
      <path
        d="M441.97922,322.96562l-9.31845,1.43743s-2.8504,6.09295,3.6728,17.89051S504.7529,429.577,504.7529,429.577l5.23176-19.56294-35.97674-66.18309Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#e6e6e6"
      />
      <path
        d="M1029.647,674.7442H170.353a1.19069,1.19069,0,0,1,0-2.38137h859.294a1.19068,1.19068,0,0,1,0,2.38137Z"
        transform="translate(-169.16231 -225.2558)"
        fill="#ccc"
      />
    </svg>
  );
};
