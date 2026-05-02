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
      title: "Nền tảng",
      description:
        "Cử nhân Tài chính - Ngân hàng trường Đại học Hà Nội"
    },
    {
      icon: <DocumentChartBarIcon />,
      title: "Chứng chỉ",
      description:
        "Chứng chỉ Hành nghề Chứng khoán - Phân tích Tài chính"
    },
    {
      icon: <BriefcaseIcon />,
      title: "Công việc hiện tại",
      description:
        "Chuyên viên Nguồn vốn tại Công ty Cổ phần Chứng khoán Asean"
    }
  ];
  return (
    <div className="flex h-[300px] flex-col justify-center gap-6 rounded-lg p-4 shadow-xl lg:h-[350px] lg:p-8">
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
    <div className="flex justify-start gap-5 rounded-lg p-2 shadow-lg lg:p-4">
      <div className="flex h-10 w-10 rounded-full bg-[#e8f1f8] p-2 text-[#223e76]">
        {icon}
      </div>
      <div>
        {title && (
          <p className="text-sm font-bold text-[#223e76] lg:text-base">
            {title}
          </p>
        )}
        <p className="text-xs lg:text-sm">{description}</p>
      </div>
    </div>
  );
}
