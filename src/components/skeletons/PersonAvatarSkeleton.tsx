import { Skeleton, IconButton } from "@mui/material";

export type PersonAvatarSkeletonProps = {
  size: number;
};

export function PersonAvatarSkeleton(props: PersonAvatarSkeletonProps) {
  const { size } = props;
  return (
    <IconButton>
      <Skeleton
        animation="wave"
        variant="circular"
        width={size}
        height={size}
      />
    </IconButton>
  );
}
