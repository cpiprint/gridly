import SignInPage from "@/features/auth/auth";
import { requireUnauth } from "@/lib/auth-utils";
const page = async () => {
  await requireUnauth();
  return <SignInPage />;
};

export default page;
