export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="my-5 flex justify-center items-center gap-4">
        {products}
        {analytics}
      </div>
      {payments}
    </div>
  );
}
