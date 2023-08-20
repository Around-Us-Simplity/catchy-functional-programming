/**
 * 카피 온 라이트 적용해보기
 */

type Email = string;
let mailingLists: Email[] = [];

function addContact(lists: Email[], email: Email) {
  return [...mailingLists, email];
}

/** form action */
export function submitFormHandler(data: FormData) {
  const { email } = Object.fromEntries(data);
  if (typeof email !== "string") return;
  mailingLists = addContact(mailingLists, email);
}
