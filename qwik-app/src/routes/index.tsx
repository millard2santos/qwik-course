import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Pokemon } from "~/components/Pokemon";

export default component$(() => {

  const id = useSignal(1)
  const isVisible = useSignal(false)


  return (
    <>
     <p>Quien es este Pokemon</p>
     <Pokemon id={id.value} isVisible={isVisible.value}/>
     <div class="flex gap-2">
      <button class="p-2 bg-gray-400 rounded" onClick$={() => id.value--}>Anterior</button>
      <button class="p-2 bg-gray-400 rounded" onClick$={() => id.value++}>Siguiente</button>
      <button class="p-2 bg-gray-400 rounded" onClick$={() => isVisible.value = !isVisible.value}>Esconder</button>
      
     </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
