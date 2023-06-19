export default function Home() {
  return (
    <div>{`Hello this is a spheron normal app, this is qa branch ${process.env.NEXT_PUBLIC_ENV_VAR}`}</div>
  );
}
