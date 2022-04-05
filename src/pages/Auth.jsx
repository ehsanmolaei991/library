import React, { useState } from "react";
import Button from "../components/shared/button/Button";
import Input from "../components/shared/input/Input";

export default function Auth() {
  

  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="py-20 flex justify-center items-center">
        <div className="bg-white shadow-md border-2 rounded-md p-5 w-full max-w-sm mx-5">
          {isLogin && (
            <>
              {/* Login */}
              <h3 className="VazirBold dark-purple">ورود به حساب کاربری</h3>
              <hr className="my-3" />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="نام کاربری"
                iconRight="fa-regular fa-user"
                containerClassName="mt-3"
              />
              <Input
                onChange={(value) => setPassword(value)}
                placeholder="رمز عبور"
                iconRight="fa-regular fa-key"
                containerClassName="mt-3"
              />
              <small
                onClick={() => {
                  setIsForgotPassword(true);
                  setIsLogin(false);
                }}
                className="py-2 block Vazir cursor-pointer green hover:dark-purple"
              >
                رمز عبور خود را فراموش کردم
              </small>
              <Button
                iconLeft="fa-regular fa-square-arrow-left"
                textClassName="text-xs"
                title="ورود به حساب کاربری"
                containerClassName="my-3 flex justify-center"
              />
              <small className="Vazir">
                حساب کاربری ندارید؟
                <span
                  className="green mx-1 VazirBold cursor-pointer"
                  onClick={() => setIsLogin(false)}
                >
                  ثبت‌نام
                </span>
              </small>
            </>
          )}
          {/* Signup */}
          {!isForgotPassword && !isLogin && (
            <>
              {/* Login */}
              <h3 className="VazirBold dark-purple">ثبت نام جدید</h3>
              <hr className="my-3" />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="نام کاربری"
                iconRight="fa-regular fa-user"
                containerClassName="mt-3"
              />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="تلفن همراه"
                iconRight="fa-regular fa-phone"
                containerClassName="mt-3"
              />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="رمز عبور"
                iconRight="fa-regular fa-key"
                containerClassName="mt-3"
              />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="تکرار رمز عبور"
                iconRight="fa-regular fa-key"
                containerClassName="mt-3"
              />

              <Button
                iconLeft="fa-regular fa-square-arrow-left"
                textClassName="text-xs"
                title="ثبت حساب کاربری"
                containerClassName="my-3 flex justify-center"
              />
              <small className="Vazir">
                از قبل حساب کاربری ساخته اید؟
                <span
                  className="green mx-1 VazirBold cursor-pointer"
                  onClick={() => setIsLogin(true)}
                >
                  ورود به حساب کاربری
                </span>
              </small>
            </>
          )}
          {/* Signup */}
          {!isLogin && isForgotPassword && (
            <>
              {/* Forgot Password */}
              <h3 className="VazirBold dark-purple">فراموشی رمز عبور</h3>
              <hr className="my-3" />
              <Input
                onChange={(value) => setUsername(value)}
                placeholder="تلفن همراه"
                iconRight="fa-regular fa-phone"
                containerClassName="mt-3"
              />
              <Button
                iconLeft="fa-regular fa-square-arrow-left"
                textClassName="text-xs"
                title="ارسال کد تائید هویت"
                containerClassName="my-3 flex justify-center"
              />
              <small className="Vazir">
                <span
                  className="green mx-1 VazirBold cursor-pointer"
                  onClick={() => {
                    setIsForgotPassword(false);
                    setIsLogin(true);
                  }}
                >
                  ورود به حساب کاربری
                </span>
              </small>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
