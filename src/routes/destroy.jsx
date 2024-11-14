import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export default async function action({ params }) {
  await deleteContact(params.id);
  return redirect("/");
}
