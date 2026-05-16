import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container mx-auto py-3 xl:px-32 2xl:px-60 2xl:py-5",
        "max-w-full",
        props.className
      )}>
      {props.children}
    </div>
  );
}
