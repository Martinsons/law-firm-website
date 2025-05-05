import { redirect } from 'next/navigation';

// This serves as a fallback in case middleware doesn't handle the redirection
export default function Home() {
  redirect('/lv');
}
