const Container = ({
  children,
  style,
}: Readonly<{
  children: React.ReactNode;
  style?: string;
}>) => {
  return <div className={`container mx-auto ${style}`}>{children}</div>;
};

export default Container;
