import Icon from "./Icon"
import { email } from "constants/icons"

export default function Hero() {
  return (
    <div
      className="bg-cover bg-center min-h-[800px] py-20"
      style={{
        backgroundImage: `url('https://cdn.onjuno.com/crypto-landing/landing-page-hero-1%402x.png')`,
      }}
    >
      <div className="flex flex-col gap-5 container">
        <h1 className="text-8xl font-black max-w-xl">
          Crypto Friendly Banking
        </h1>
        <p className="text-3xl max-w-2xl">
          Earn, invest and spend both your cash and crypto from one powerful
          checking account
        </p>
        <div className="flex space-x-4 max-w-2xl text-xl font-light">
          <div className="flex items-center relative flex-1">
            <span className="absolute left-2 text-black">
              <Icon size="md" path={email} />
            </span>
            <input
              className="button py-6 pl-20 text-black placeholder:text-black w-full text-xl font-light focus:ring-0 outline-none"
              type="text"
              placeholder="Enter Email Address"
            />
          </div>
          <button className="button py-6 bg-blue-500 text-white">
            Create Account
          </button>
        </div>
      </div>
    </div>
  )
}
