/**
 * 카피 온 라이트 적용해보기
 */

type Mail = string;

let mailingList: Mail[] = [];

function addContact(email: string) {
  return [...mailingList, email];
}

function submitFormHandler(event: SubmitEvent) {
  const form = event.target as HTMLFormElement;
  const email = form.elements.email.value as string;
  mailingList = addContact(email);
}

export {};
