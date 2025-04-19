export default function NavigationButton(props: any) {
    const {children} = props
return (
    <button className="rounded-lg bg-tertiary overflow-auto text-primary-dark py-3 m-3 flex justify-center items-center aspect-square">
        {children}
    </button>
)
}