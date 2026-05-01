/* eslint-disable @next/next/no-img-element */
export default function ProfileSection() {
  const profileData = [
    {
      imgPath: "",
      title: "",
      description: ""
    }
  ];
  return (
    <div>
      {profileData.map(profile => (
        <ProfileItem
          key={profile.title}
          description={profile.description}
          imgPath={profile.imgPath}
          title={profile.title}
        />
      ))}
    </div>
  );
}

function ProfileItem({ imgPath, title, description }) {
  return (
    <div className="flex justify-start gap-5 rounded-lg p-2 shadow-lg">
      <img src={imgPath} alt="" />
      <div>
        {title && <p>{title}</p>}
        <p>{description}</p>
      </div>
    </div>
  );
}
