import { cx } from "@/utils/all";

export default function Container(props) {
  return (
    <div
      className={cx(
        "container mx-auto xl:px-60 xl:py-5 py-3",
        "max-w-full",
        props.className
      )}>
      {props.children}
    </div>
  );
}
