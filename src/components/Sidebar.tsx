import AddTodoForm from "./AddTodoForm";
import Button from "./Button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const Sidebar = () => {
  const { login, logout, register, user, isLoading, isAuthenticated } = useKindeAuth();

  return (
    <section
      className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08]
        px-[25px] pt-[18px] pb-[28px] bg-opacity-15"
    >
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? null : isAuthenticated ? (
          <>
          <p className="text-sm">Hello {user?.email}</p>

          <Button onClick={logout} buttonType="secondary">
            Log out
          </Button>
          </>
        ) : (
          <>
            <Button onClick={login} buttonType="secondary">
              Log in
            </Button>
            <Button onClick={register} buttonType="secondary">
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
