import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}. All
        rights reserved.
        <p className="mt-4 text-sm text-gray-700">
          Các quan điểm được chia sẻ trên FinPoint là quan điểm cá
          nhân, không đại diện cho tổ chức nơi chủ sở hữu đang công
          tác.
        </p>
      </div>
      <div className="mt-2 flex items-center justify-end">
        <ThemeSwitch />
      </div>
    </Container>
  );
}
