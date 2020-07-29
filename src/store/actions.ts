export function actionEnter(username: string, yn: boolean, terms: boolean)
{
  return ({
    type: "ENTER",
    username: username,
    yn: yn,
    terms: terms
  })
}