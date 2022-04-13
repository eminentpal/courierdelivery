import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/actions/UserActions";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SideBar = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, error } = useSelector((state) => state.auth);

  console.log(user);
  const logoutHandler = () => {
    dispatch(Logout());
    toast("Success");
    router.push("/");
  };

  if (loading) {
    <h1>loading..</h1>;
  }
  return (
    <div className="dashSidebar">
      <div className="dashLogo">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="121.000000pt"
          height="33.000000pt"
          viewBox="0 0 121.000000 33.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,33.000000) scale(0.021724,-0.019880)"
            fill="rgb(223, 213, 213)"
            stroke="none"
          >
            <path
              d="M688 1585 c-37 -21 -68 -75 -68 -121 0 -78 60 -134 142 -134 60 0
102 28 123 83 22 59 8 113 -40 156 -29 25 -44 31 -83 31 -26 -1 -59 -7 -74
-15z"
            />
            <path
              d="M996 1267 c-41 -65 -46 -80 -46 -130 0 -32 -3 -57 -6 -57 -4 0 -55
44 -113 98 -123 115 -135 122 -194 122 -56 0 -105 -32 -131 -84 -19 -39 -19
-40 12 -291 l31 -252 -48 -123 c-32 -82 -55 -126 -67 -131 -11 -4 -68 -8 -129
-9 -181 -2 -227 -18 -241 -86 -5 -26 -1 -38 23 -64 l30 -33 114 2 c63 2 166 6
229 9 l114 7 68 159 c38 88 70 161 71 162 6 7 240 -182 247 -200 5 -11 21 -85
36 -164 24 -132 29 -144 57 -168 25 -21 38 -25 66 -20 40 6 81 45 81 77 0 20
-38 217 -66 339 l-15 65 -139 105 c-77 58 -140 107 -140 110 0 3 -7 59 -15
125 -8 65 -15 125 -15 133 0 7 32 -14 70 -49 l70 -62 0 -68 c0 -57 3 -70 19
-79 27 -14 595 -14 622 0 18 10 19 23 19 248 l-1 237 -43 70 -43 70 -240 3
-241 2 -46 -73z m542 -303 l2 -181 -250 -7 c-138 -4 -255 -4 -260 -1 -6 3 -10
19 -10 36 l0 29 135 0 c131 0 137 1 160 25 30 29 32 74 6 106 -18 23 -27 24
-158 29 l-138 5 -3 73 -3 72 258 -2 258 -3 3 -181z"
            />
            <path
              d="M3205 1325 c-44 -8 -86 -14 -92 -14 -26 -2 -13 -39 17 -50 l30 -10 0
-349 c0 -377 2 -362 -51 -362 -12 0 -19 -7 -19 -20 0 -19 7 -20 160 -20 153 0
160 1 160 20 0 14 -7 20 -24 20 -40 0 -47 20 -44 131 l3 104 24 -45 c46 -86
113 -180 144 -202 27 -20 47 -24 135 -26 113 -4 128 5 73 46 -46 34 -241 287
-241 313 0 27 154 135 206 145 24 4 34 12 34 25 0 17 -9 19 -99 19 l-99 0 -29
-33 c-16 -18 -55 -71 -88 -117 l-60 -85 -5 260 -5 260 -25 2 c-14 0 -61 -5
-105 -12z"
            />
            <path
              d="M4960 1325 c-47 -7 -91 -14 -97 -14 -25 -2 -14 -40 12 -47 14 -3 30
-14 35 -24 12 -23 13 -659 1 -678 -4 -7 -21 -16 -37 -21 -16 -4 -29 -14 -29
-22 0 -11 29 -15 158 -17 146 -2 157 -1 157 16 0 12 -11 21 -32 27 l-33 10 -3
115 -3 115 53 -88 c61 -103 109 -162 147 -182 36 -18 203 -23 209 -6 2 7 -21
38 -52 69 -61 63 -124 142 -181 227 l-37 57 28 29 c41 42 121 93 174 111 26 8
46 22 48 31 3 15 -9 17 -102 17 l-105 0 -34 -42 c-18 -24 -58 -78 -88 -121
l-54 -79 -3 266 -2 266 -23 -1 c-12 -1 -60 -7 -107 -14z"
            />
            <path
              d="M4610 1306 c-49 -15 -76 -71 -60 -121 15 -46 44 -65 98 -65 35 0 49
6 73 29 75 75 -7 191 -111 157z"
            />
            <path
              d="M2819 1281 c-63 -63 -19 -161 73 -161 54 0 83 19 98 66 23 69 -21
124 -98 124 -35 0 -49 -6 -73 -29z"
            />
            <path
              d="M2160 1286 c-113 -25 -184 -82 -234 -186 -30 -63 -31 -69 -31 -210 0
-138 1 -148 28 -205 15 -33 45 -77 65 -99 41 -43 143 -96 184 -96 20 0 32 -10
52 -44 59 -101 173 -166 291 -166 105 0 153 33 76 53 -49 12 -105 53 -145 105
-20 25 -36 48 -36 51 0 3 25 17 55 30 70 30 136 102 165 179 14 36 24 92 27
149 15 250 -83 405 -282 442 -74 14 -144 13 -215 -3z m192 -62 c38 -20 76 -90
94 -175 23 -108 15 -303 -16 -384 -39 -103 -106 -145 -195 -125 -50 11 -90 52
-117 119 -20 50 -22 75 -23 221 0 133 4 177 19 225 37 122 135 170 238 119z"
            />
            <path
              d="M3770 1262 c0 -14 9 -21 32 -26 60 -12 58 -1 58 -341 0 -173 -3 -321
-6 -329 -4 -9 -23 -19 -45 -22 -29 -5 -39 -11 -39 -25 0 -18 11 -19 190 -19
183 0 190 1 190 20 0 16 -7 20 -33 20 -18 0 -43 7 -55 16 -21 14 -22 23 -22
133 l0 118 103 6 c158 8 228 42 272 131 56 112 18 244 -85 301 l-55 30 -252 3
c-245 3 -253 3 -253 -16z m407 -52 c49 -29 67 -73 67 -160 0 -120 -36 -174
-127 -186 -73 -10 -77 0 -77 185 0 109 4 161 12 169 18 18 89 14 125 -8z"
            />
            <path
              d="M2858 1052 c-100 -14 -108 -17 -108 -37 0 -17 8 -24 30 -28 l30 -6 0
-209 c0 -220 -2 -232 -47 -232 -16 0 -23 -6 -23 -20 0 -19 7 -20 160 -20 153
0 160 1 160 20 0 14 -7 20 -22 20 -53 1 -53 0 -56 275 -2 140 -6 254 -10 254
-4 -1 -55 -9 -114 -17z"
            />
            <path
              d="M4615 1051 c-98 -14 -110 -18 -110 -36 0 -12 8 -21 20 -23 41 -7 45
-27 45 -226 0 -105 -4 -197 -9 -204 -4 -7 -21 -16 -37 -21 -16 -4 -30 -15 -32
-24 -3 -15 12 -17 157 -17 148 0 161 1 161 18 0 12 -11 21 -32 27 l-33 10 -3
250 c-1 137 -6 252 -10 256 -4 3 -56 -1 -117 -10z"
            />
          </g>
        </svg>
      </div>
      <div className="dashMenu">
        <h3>Menu</h3>
        <ul className="dashPages">
          {props.dashboard && <li>{props.dashboard}</li>}
          {props.shipments && <li>{props.shipments}</li>}
          {props.track && <li>{props.track}</li>}
          {props.user && user?.role === "admin" && <li>{props.user}</li>}
        </ul>
      </div>
      <div className="dashMenu">
        <h3>Account</h3>
        {/* Profile */}
        <ul className="profilePic">
          <li>{user && user.name} </li>
        </ul>
      </div>
      <div className="dashMenu">
        <ul className="dashLogout">
          <li onClick={logoutHandler}>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
