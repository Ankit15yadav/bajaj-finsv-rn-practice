import SignIn from "./(auth)/sign-in";

export default function RootLayout() {

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/home")
  //   }, 2000)
  // }, [])

  return (
    <SignIn />
  );
}
