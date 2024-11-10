const Container = ({
  children,
  style,
  id = "",
}: Readonly<{
  children: React.ReactNode;
  style?: string;
  id?: string;
}>) => {
  return (
    <div className={`container mx-auto ${style}`} id={id}>
      {children}
    </div>
  );
};

export default Container;
