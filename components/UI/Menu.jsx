import Link from 'next/link'

const Menu = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        left: "0",

        width: "30%",
        height: "100vh",

        display: "flex",
        flexDirection: "column",
        zIndex: '100',
        
        backgroundColor: "black",
      }}
    >
      TAIL OF THE TRIAL

      <Link href='/levels/1'>
        <button>START</button>
      </Link>
    </div>
  );
};

export default Menu;
