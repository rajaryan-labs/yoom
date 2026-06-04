import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Meeting = async ({ params }: PageProps) => {
  const { id } = await params;
  return <div>Meeting Room: #{id}</div>;
};

export default Meeting;
