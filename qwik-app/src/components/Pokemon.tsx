import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
    id: number;
    isVisible : boolean;
}

export const Pokemon = component$(({ id, isVisible }: Props) => {

    const imageLoaded = useSignal(false)

    useTask$(({track}) => {
        track(() => id)
        imageLoaded.value = false
        
    })

    return (
        <div>
            Pokemon
            {id}
            <div class="flex gap-4 items-center">
                { !imageLoaded.value && <span>Cargando</span>}
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt="Imagen de Pokemon"
                    width={200}
                    height={200}
                    onLoad$={ () => {
                        setTimeout(() => imageLoaded.value = true , 1000)
                    } }
                    class={[{
                        "hidden" : !imageLoaded.value,
                        "brightness-0" : !isVisible
                    }, "transition duration-100"]}
                />
            </div>
        </div>
    )
});