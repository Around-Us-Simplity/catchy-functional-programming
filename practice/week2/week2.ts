/**
 * 카피 온 라이트 적용해보기
 */

const mailingList = [];

function addContact(email) {
  mailingList.push(email);
}

function submitFormHandler(event) {
  const form = event.target;
  const email = form.elements["email"].value;
  addContact(email);
}
