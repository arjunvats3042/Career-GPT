import MyLoader from "@/components/my-loader";
import {Suspense} from "react";
import {LineShadowText} from "@/components/magicui/line-shadow-text";

export default function Layout({children}) {
  const shadowColor = "white";

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row sm:flex-row items-center justify-center sm:justify-start mb-4 sm:mb-5">
          <LineShadowText
            className="italic text-4xl sm:text-5xl md:text-6xl font-bold gradient-title"
            shadowColor={shadowColor}
          >
            Resume-
          </LineShadowText>
          <LineShadowText
            className="italic text-4xl sm:text-5xl md:text-6xl font-bold gradient-title"
            shadowColor={shadowColor}
          >
            Builder
          </LineShadowText>
        </div>
        <Suspense fallback={<MyLoader />}>{children}</Suspense>
      </div>
    </div>
  );
}
