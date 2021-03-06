import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={17}
      height={31}
      viewBox="0 0 17 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.919 18.788l-3.512-2.67a.719.719 0 010-1.246l3.512-2.67a.712.712 0 011.069.623v5.34a.71.71 0 01-1.07.623z"
        fill="#000"
      />
      <path
        d="M16.52 30.515a1.619 1.619 0 01-2.306 0L.471 16.652a1.551 1.551 0 01-.402-.692c-.01-.03-.02-.05-.02-.08-.01-.029-.01-.049-.02-.078a1.623 1.623 0 010-.623c0-.03.01-.05.02-.08s.01-.049.02-.079c.068-.257.206-.494.402-.692L14.214.475a1.637 1.637 0 012.305 0c.314.316.471.741.471 1.157 0 .415-.157.84-.47 1.157L3.923 15.495l12.595 12.697a1.65 1.65 0 010 2.323z"
        fill="#000"
      />
    </svg>
  );
}

export default SvgComponent;
