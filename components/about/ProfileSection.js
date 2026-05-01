/* eslint-disable @next/next/no-img-element */
import {
  AcademicCapIcon,
  DocumentCheckIcon,
  BriefcaseIcon,
  ShieldCheckIcon,
  TrophyIcon,
  UserIcon,
  DocumentChartBarIcon
} from "@heroicons/react/24/outline";

export default function ProfileSection() {
  const profileData = [
    {
      icon: <AcademicCapIcon />,
      title: "Nền tảng chuyên môn",
      description: "Cử nhân Tài chính - Ngân hàng, Đại học Hà Nội"
    },
    {
      icon: <DocumentChartBarIcon />,
      title: "Chứng chỉ",
      description:
        "Chứng chỉ hành nghề Chứng khoán - Phân tích Tài chính"
    },
    {
      icon: <BriefcaseIcon />,
      title: "Kinh nghiệm",
      description: "Công ty Cổ phần Chứng khoán FPT"
    },
    {
      icon: <UserIcon />,
      title: "Hiện tại",
      description:
        "Chuyên viên Nguồn vốn - Công ty Cổ phần Chứng khoán Asean"
    }
  ];
  return (
    <div className="flex h-[350px] flex-col gap-4 rounded-lg p-8 shadow-xl">
      {profileData.map(profile => (
        <ProfileItem
          key={profile.title}
          description={profile.description}
          icon={profile.icon}
          title={profile.title}
        />
      ))}
    </div>
  );
}

function ProfileItem({ icon, title, description }) {
  return (
    <div className="flex justify-start gap-5 rounded-lg px-4 py-2 shadow-lg">
      <div className="flex h-10 w-10 rounded-full bg-[#e8f1f8] p-2 text-[#223e76]">
        {icon}
      </div>
      <div>
        {title && <p className="font-bold text-[#223e76]">{title}</p>}
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
