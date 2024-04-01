import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

export default function PostCard({title, description, image, slug}: Props) {
  return (
    <Link href={`/blog/${slug}`}>
      <Card className='hover:text-cyan-500'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={image} height={500} width={500} alt='' />
        </CardContent>
      </Card>
    </Link>
  );
}
