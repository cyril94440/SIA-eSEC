import { Icon } from "../Icon";
import { IconWrap } from "../IconWrap";

export const App: Icon = (props) => (
  <IconWrap
    props={props}
    viewBox="0 0 1704 1418"
    content={(color) => (
      <>
        {/* <path
          fill={color}
          d="M25.7819 124.604C21.7763 124.604 18.4167 124.346 15.7032 123.829C13.0543 123.312 10.9223 122.472 9.30709 121.309C7.69191 120.082 6.46437 118.499 5.62448 116.561C4.78459 114.558 4.23543 112.135 3.977 109.293C3.71857 106.45 3.58936 103.09 3.58936 99.2138C3.58936 94.6267 3.78318 90.718 4.17082 87.4876C4.55846 84.1927 5.43066 81.5438 6.78741 79.5409C8.20877 77.4735 10.4054 75.9876 13.3773 75.0831C16.3493 74.1139 20.3549 73.6294 25.3943 73.6294C29.2061 73.6294 32.3072 73.9201 34.6977 74.5016C37.1528 75.0831 39.091 75.9876 40.5123 77.2151C41.9337 78.4426 42.9674 80.0901 43.6135 82.1575C44.3242 84.1604 44.7764 86.5831 44.9702 89.4258C45.1641 92.2039 45.261 95.4343 45.261 99.1169V101.734H11.4391C11.4391 105.093 11.6006 107.839 11.9237 109.971C12.2467 112.103 12.8928 113.75 13.8619 114.913C14.8956 116.076 16.4785 116.884 18.6105 117.336C20.8072 117.788 23.7791 118.014 27.5263 118.014C29.0769 118.014 30.789 117.982 32.6626 117.918C34.5362 117.788 36.4098 117.627 38.2834 117.433C40.157 117.239 41.8368 117.045 43.3228 116.852V123.248C41.966 123.506 40.2862 123.732 38.2834 123.926C36.3452 124.12 34.2778 124.281 32.0811 124.411C29.9491 124.54 27.8493 124.604 25.7819 124.604ZM37.605 97.7602V95.1436C37.605 91.784 37.4112 89.1351 37.0236 87.1969C36.6359 85.1941 35.9575 83.7081 34.9884 82.739C34.0839 81.7053 32.8241 81.0269 31.2089 80.7039C29.5937 80.3808 27.5909 80.2193 25.2004 80.2193C22.0993 80.2193 19.6442 80.4454 17.8352 80.8977C16.0262 81.2853 14.6695 82.0283 13.765 83.1266C12.8605 84.225 12.2467 85.8078 11.9237 87.8753C11.6006 89.9427 11.4391 92.6885 11.4391 96.1127H39.4463L37.605 97.7602Z"
        />
        <path fill={color} d="M53.5523 99.7953V92.6239H77.1016V99.7953H53.5523Z" />
        <path
          fill={color}
          d="M104.166 124.604C102.292 124.604 100.289 124.54 98.1572 124.411C96.0252 124.281 93.9254 124.12 91.858 123.926C89.7906 123.797 87.917 123.603 86.2372 123.345V116.948C87.7877 117.078 89.2737 117.207 90.6951 117.336C92.181 117.465 93.6347 117.595 95.0561 117.724C96.4774 117.788 97.8988 117.853 99.3201 117.918C100.741 117.918 102.195 117.918 103.681 117.918C107.041 117.918 109.463 117.691 110.949 117.239C112.5 116.722 113.501 115.882 113.954 114.72C114.47 113.557 114.729 112.038 114.729 110.165C114.729 108.033 114.535 106.482 114.147 105.513C113.824 104.544 113.211 103.93 112.306 103.672C111.466 103.349 110.174 103.09 108.43 102.896L95.6375 101.443C92.601 101.12 90.3074 100.474 88.7569 99.5046C87.2063 98.4708 86.1403 97.0172 85.5588 95.1436C84.9773 93.27 84.6866 90.9118 84.6866 88.0691C84.6866 84.8387 85.1389 82.2544 86.0434 80.3162C86.9479 78.378 88.24 76.9244 89.9198 75.9553C91.5996 74.9861 93.6347 74.3724 96.0252 74.1139C98.4156 73.7909 101.097 73.6294 104.069 73.6294C105.749 73.6294 107.525 73.694 109.399 73.8232C111.272 73.9524 113.114 74.1139 114.923 74.3078C116.732 74.5016 118.282 74.7277 119.574 74.9861V81.3822C117.895 81.1238 116.183 80.93 114.438 80.8008C112.758 80.607 111.014 80.4778 109.205 80.4131C107.461 80.3485 105.684 80.3162 103.875 80.3162C101.42 80.3162 99.3201 80.4454 97.5757 80.7039C95.8313 80.9623 94.5069 81.6084 93.6024 82.6421C92.7625 83.6758 92.3425 85.3879 92.3425 87.7784C92.3425 89.652 92.4718 91.0733 92.7302 92.0424C93.0532 92.9469 93.667 93.593 94.5715 93.9806C95.476 94.3037 96.7358 94.5621 98.351 94.7559L111.725 96.2096C114.374 96.468 116.441 96.9849 117.927 97.7602C119.478 98.4708 120.576 99.763 121.222 101.637C121.933 103.51 122.288 106.321 122.288 110.068C122.288 113.169 121.9 115.689 121.125 117.627C120.414 119.5 119.284 120.954 117.733 121.988C116.183 123.022 114.277 123.7 112.015 124.023C109.754 124.411 107.138 124.604 104.166 124.604Z"
        />
        <path
          fill={color}
          d="M152.62 124.604C148.614 124.604 145.254 124.346 142.541 123.829C139.892 123.312 137.76 122.472 136.145 121.309C134.53 120.082 133.302 118.499 132.462 116.561C131.622 114.558 131.073 112.135 130.815 109.293C130.556 106.45 130.427 103.09 130.427 99.2138C130.427 94.6267 130.621 90.718 131.009 87.4876C131.396 84.1927 132.268 81.5438 133.625 79.5409C135.047 77.4735 137.243 75.9876 140.215 75.0831C143.187 74.1139 147.193 73.6294 152.232 73.6294C156.044 73.6294 159.145 73.9201 161.535 74.5016C163.991 75.0831 165.929 75.9876 167.35 77.2151C168.771 78.4426 169.805 80.0901 170.451 82.1575C171.162 84.1604 171.614 86.5831 171.808 89.4258C172.002 92.2039 172.099 95.4343 172.099 99.1169V101.734H138.277C138.277 105.093 138.438 107.839 138.761 109.971C139.085 112.103 139.731 113.75 140.7 114.913C141.733 116.076 143.316 116.884 145.448 117.336C147.645 117.788 150.617 118.014 154.364 118.014C155.915 118.014 157.627 117.982 159.5 117.918C161.374 117.788 163.248 117.627 165.121 117.433C166.995 117.239 168.675 117.045 170.161 116.852V123.248C168.804 123.506 167.124 123.732 165.121 123.926C163.183 124.12 161.116 124.281 158.919 124.411C156.787 124.54 154.687 124.604 152.62 124.604ZM164.443 97.7602V95.1436C164.443 91.784 164.249 89.1351 163.861 87.1969C163.474 85.1941 162.795 83.7081 161.826 82.739C160.922 81.7053 159.662 81.0269 158.047 80.7039C156.432 80.3808 154.429 80.2193 152.038 80.2193C148.937 80.2193 146.482 80.4454 144.673 80.8977C142.864 81.2853 141.507 82.0283 140.603 83.1266C139.698 84.225 139.085 85.8078 138.761 87.8753C138.438 89.9427 138.277 92.6885 138.277 96.1127H166.284L164.443 97.7602Z"
        />
        <path
          fill={color}
          d="M201.032 124.604C197.285 124.604 194.184 124.281 191.729 123.635C189.338 122.989 187.4 122.02 185.914 120.728C184.493 119.436 183.427 117.788 182.716 115.786C182.005 113.783 181.521 111.392 181.262 108.614C181.068 105.836 180.972 102.67 180.972 99.1169C180.972 95.4343 181.101 92.2039 181.359 89.4258C181.682 86.6477 182.231 84.2573 183.007 82.2544C183.847 80.187 184.977 78.5395 186.399 77.312C187.885 76.0845 189.79 75.18 192.116 74.5985C194.442 73.9524 197.317 73.6294 200.741 73.6294C203.003 73.6294 205.361 73.7586 207.816 74.017C210.336 74.2109 212.403 74.5016 214.018 74.8892V81.2853C212.532 81.0269 210.691 80.8008 208.494 80.607C206.362 80.4131 204.424 80.3162 202.68 80.3162C199.643 80.3162 197.188 80.5747 195.314 81.0915C193.505 81.6084 192.116 82.5452 191.147 83.9019C190.243 85.2587 189.629 87.1646 189.306 89.6197C188.983 92.0747 188.821 95.2405 188.821 99.1169C188.821 103.058 188.983 106.288 189.306 108.808C189.629 111.263 190.275 113.169 191.244 114.526C192.278 115.818 193.699 116.722 195.508 117.239C197.382 117.691 199.837 117.918 202.873 117.918C204.682 117.918 206.653 117.821 208.785 117.627C210.917 117.433 212.823 117.207 214.503 116.948V123.345C212.888 123.668 210.82 123.958 208.3 124.217C205.781 124.475 203.358 124.604 201.032 124.604Z"
        />
        <path
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H272.786V201H0V157.152H11.0589V189.833H261.727V11.1667H11.0589V43.8478H0V0Z"
        /> */}

        <path
          fill={color !== "currentColor" ? color : "#407EC9"}
          opacity="1.000000"
          stroke="none"
          d="
M898.000000,1183.000000 
	C677.538452,1183.000000 457.576965,1183.000000 237.307831,1183.000000 
	C237.307831,1125.588135 237.307831,1068.538452 237.307831,1011.244141 
	C248.419998,1011.244141 259.353455,1011.244141 270.841736,1011.244141 
	C270.841736,1056.647217 270.841736,1102.033569 270.841736,1147.708252 
	C659.103455,1147.708252 1046.812134,1147.708252 1434.760498,1147.708252 
	C1434.760498,855.574829 1434.760498,563.648438 1434.760498,271.361023 
	C1047.035278,271.361023 659.326599,271.361023 271.064819,271.361023 
	C271.064819,317.074860 271.064819,362.794495 271.064819,408.755096 
	C259.581604,408.755096 248.648117,408.755096 237.356445,408.755096 
	C237.356445,351.686249 237.356445,294.636322 237.356445,237.292831 
	C647.767151,237.292831 1058.141968,237.292831 1468.758301,237.292831 
	C1468.758301,552.420715 1468.758301,867.346558 1468.758301,1183.000000 
	C1278.666992,1183.000000 1088.583496,1183.000000 898.000000,1183.000000 
z"
        />
        <path
          fill={color !== "currentColor" ? color : "#000000"}
          opacity="1.000000"
          stroke="none"
          d="
M775.000000,589.976196 
	C775.000000,603.143860 775.000000,615.848389 775.000000,628.779907 
	C753.912598,628.779907 732.177979,628.779907 710.000000,628.779907 
	C710.000000,618.542419 710.386841,608.408508 709.839844,598.325317 
	C709.558228,593.134583 708.222290,587.789001 706.274231,582.951599 
	C703.510254,576.088074 695.354431,571.214905 689.045532,572.083496 
	C680.947571,573.198303 674.973083,576.975159 672.782043,585.606506 
	C669.565735,598.277100 668.407288,610.761597 672.790100,623.485107 
	C675.952026,632.664307 682.478455,639.226257 689.649719,644.692200 
	C702.841675,654.746887 717.439026,662.992676 730.381531,673.330811 
	C747.808105,687.250488 763.882080,702.832703 771.169373,724.834106 
	C773.681274,732.418030 775.248657,740.526184 775.804688,748.495483 
	C776.579834,759.605286 776.291870,770.818909 775.938171,781.971558 
	C775.240173,803.983276 768.100464,823.616699 752.154358,839.176453 
	C740.193298,850.847595 725.552429,857.814087 708.869873,859.953308 
	C701.411499,860.909668 693.862549,862.075928 686.393921,861.850098 
	C669.294556,861.332947 652.501282,858.453308 637.897339,848.875122 
	C625.460205,840.718018 616.539551,829.413696 610.932190,815.417175 
	C602.410522,794.146484 602.622864,771.949402 603.133423,749.333374 
	C625.190613,749.333374 647.259949,749.333374 670.000000,749.333374 
	C670.000000,758.026306 669.636536,766.964966 670.125854,775.856628 
	C670.460449,781.936462 671.728027,788.007446 673.046631,793.979004 
	C674.415955,800.180054 679.027100,803.889648 684.896362,804.840637 
	C692.846252,806.128845 700.334045,804.543091 704.977661,796.916260 
	C708.494080,791.140930 710.141052,784.762451 709.985535,777.989807 
	C709.749512,767.715820 711.316040,757.272888 707.007812,747.374451 
	C703.318848,738.898987 698.265198,731.455566 690.709229,725.994934 
	C675.251831,714.823853 659.290405,704.302002 644.326782,692.510071 
	C630.818298,681.864624 618.331726,669.853943 610.582947,654.028564 
	C605.703674,644.063599 602.746033,633.542542 602.963318,622.258667 
	C603.142883,612.931152 602.637573,603.580383 603.075745,594.269958 
	C603.979675,575.062500 609.535156,557.607788 622.575195,542.801270 
	C635.122803,528.554016 650.759216,520.504700 669.321716,518.087036 
	C678.415100,516.902649 687.665161,515.824402 696.785522,516.184875 
	C713.023438,516.826721 729.021423,519.745850 743.020935,528.651550 
	C758.850647,538.721436 767.702148,553.873779 771.940979,571.835938 
	C773.311951,577.645386 773.999695,583.616211 775.000000,589.976196 
z"
        />
        <path
          fill={color !== "currentColor" ? color : "#000000"}
          opacity="1.000000"
          stroke="none"
          d="
M1115.999268,592.186218 
	C1114.031006,585.562927 1112.252808,578.847473 1106.470337,575.331116 
	C1095.979248,568.951599 1085.930054,573.391479 1081.279907,585.982422 
	C1078.533569,593.418457 1077.228882,601.790771 1077.179321,609.753845 
	C1076.838501,664.578552 1076.833618,719.407227 1077.159424,774.232056 
	C1077.215454,783.673584 1078.709595,793.276123 1086.085327,800.639893 
	C1093.727051,808.269287 1107.571411,804.730469 1112.123901,796.687561 
	C1116.258789,789.382874 1117.489380,781.493164 1117.909424,773.444702 
	C1118.324341,765.494080 1118.000000,757.504944 1118.000000,749.267700 
	C1139.992920,749.267700 1161.729858,749.267700 1184.702393,749.267700 
	C1183.843140,760.093872 1183.593506,770.934692 1181.964478,781.564148 
	C1180.387451,791.854248 1178.314453,802.255310 1174.837769,812.030945 
	C1165.832275,837.351929 1148.152344,853.635376 1121.427734,858.888367 
	C1112.504761,860.642334 1103.282227,862.010010 1094.241333,861.781799 
	C1077.503174,861.359375 1061.000488,858.407715 1046.749756,848.855774 
	C1034.541870,840.673035 1025.509888,829.520386 1020.017151,815.732483 
	C1013.238708,798.717407 1010.922180,780.967529 1010.960754,762.744263 
	C1011.071899,710.250732 1010.503723,657.749878 1011.246094,605.266663 
	C1011.539978,584.486877 1016.216492,564.341919 1028.639771,546.666321 
	C1039.062988,531.836243 1053.297974,522.821716 1070.551636,519.257812 
	C1081.845459,516.924927 1093.677002,515.858398 1105.197144,516.257751 
	C1124.330688,516.921082 1142.177734,522.783081 1156.461548,536.164734 
	C1167.156860,546.184448 1173.995239,558.991760 1177.859741,573.023987 
	C1182.832642,591.080566 1184.644531,609.614075 1183.894653,628.681641 
	C1162.110229,628.681641 1140.372437,628.681641 1118.899658,628.681641 
	C1117.940186,616.747925 1116.970215,604.681396 1115.999268,592.186218 
z"
        />
        <path
          fill={color !== "currentColor" ? color : "#000000"}
          opacity="1.000000"
          stroke="none"
          d="
M821.000000,832.000000 
	C821.000000,728.198242 821.000000,624.896545 821.000000,521.297485 
	C870.931641,521.297485 920.666321,521.297485 970.700745,521.297485 
	C970.700745,540.261902 970.700745,559.333008 970.700745,578.803223 
	C943.067932,578.803223 915.329407,578.803223 887.296326,578.803223 
	C887.296326,602.268127 887.296326,625.338684 887.296326,648.808716 
	C909.936890,648.808716 932.676270,648.808716 955.706787,648.808716 
	C955.706787,667.940796 955.706787,686.678528 955.706787,705.815918 
	C933.055908,705.815918 910.316406,705.815918 887.289673,705.815918 
	C887.289673,737.281616 887.289673,768.351257 887.289673,799.819458 
	C914.948425,799.819458 942.687012,799.819458 970.711792,799.819458 
	C970.711792,818.951050 970.711792,837.688721 970.711792,856.713867 
	C921.045593,856.713867 871.311035,856.713867 821.000000,856.713867 
	C821.000000,848.697144 821.000000,840.598572 821.000000,832.000000 
z"
        />
        <path
          fill={color !== "currentColor" ? color : "#000000"}
          opacity="1.000000"
          stroke="none"
          d="
M303.000000,759.028381 
	C303.000000,768.686279 302.355469,777.911377 303.226685,786.991028 
	C303.807220,793.041382 306.242859,798.998230 308.400146,804.791504 
	C311.150146,812.176331 327.436615,812.307861 330.842621,804.062439 
	C333.258636,798.213623 334.901123,791.893616 335.828461,785.627014 
	C336.647644,780.091125 336.000000,774.338135 336.000000,768.340698 
	C357.839783,768.340698 379.573517,768.340698 402.148560,768.340698 
	C401.772064,775.457275 401.884277,782.840698 400.884247,790.070312 
	C399.275574,801.700073 396.629730,813.060303 391.108276,823.690613 
	C380.907654,843.329651 364.834412,854.862183 343.402435,858.895386 
	C334.461853,860.577942 325.270325,861.944031 316.217987,861.806213 
	C296.696289,861.509094 277.583740,858.126099 262.502991,844.532104 
	C256.265259,838.909302 250.896881,831.550415 247.267029,823.960571 
	C238.704239,806.056274 236.817307,786.635986 236.945908,766.923767 
	C237.149124,735.770142 236.693634,704.609863 237.130081,673.460999 
	C237.346252,658.033325 240.473740,642.871826 247.112152,628.850281 
	C257.198944,607.545349 274.178619,595.035461 297.506348,590.945801 
	C318.168030,587.323669 338.508850,588.044128 357.950134,596.141663 
	C378.108856,604.537903 390.248535,620.574646 395.789795,641.239441 
	C398.581512,651.650391 400.362396,662.568481 400.791504,673.329285 
	C401.777100,698.045654 401.654694,722.806213 401.970764,747.548950 
	C401.974670,747.854492 401.829529,748.162048 401.659058,748.853577 
	C369.013458,748.853577 336.281677,748.853577 303.000000,748.853577 
	C303.000000,752.320129 303.000000,755.426941 303.000000,759.028381 
M303.000000,676.502441 
	C303.000000,684.261108 303.000000,692.019836 303.000000,699.730469 
	C314.290833,699.730469 325.020691,699.730469 335.001617,699.730469 
	C335.001617,687.580750 335.398590,675.688965 334.824921,663.844177 
	C334.560028,658.374939 332.746948,652.882446 331.002197,647.610107 
	C329.172760,642.081909 323.969757,640.185425 318.968323,640.226868 
	C313.994110,640.267944 309.501160,642.542053 306.955414,647.717163 
	C302.580170,656.611450 302.959137,666.052551 303.000000,676.502441 
z"
        />
        <path
          fill={color !== "currentColor" ? color : "#000000"}
          opacity="1.000000"
          stroke="none"
          d="
M525.000000,725.000000 
	C500.525452,725.000000 476.550934,725.000000 452.288513,725.000000 
	C452.288513,706.383423 452.288513,687.979553 452.288513,669.287109 
	C487.285583,669.287109 522.353882,669.287109 557.711426,669.287109 
	C557.711426,687.616516 557.711426,706.020386 557.711426,725.000000 
	C547.027161,725.000000 536.263550,725.000000 525.000000,725.000000 
z"
        />
      </>
    )}
  />
);
