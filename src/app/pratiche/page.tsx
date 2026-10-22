import { redirect } from "next/navigation";

// La pagina "Pratiche" è stata unita al calendario classi: ogni classe in
// /classi è ora cliccabile e mostra i dettagli della pratica e chi la
// insegna. Chi arriva su questo URL (es. da un link salvato) viene
// reindirizzato lì.
export default function PraticheRedirect() {
  redirect("/classi");
}
