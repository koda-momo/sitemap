import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/**
 * 全体のレイアウト用コンポーネント.
 */
export const Layout: FC<Props> = memo(({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
});
