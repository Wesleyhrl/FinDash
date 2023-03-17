
export default function TabsContent(props){
    return(
        <div className={`TabsContent tab-content border border-top-0 p-1 bg-${props.bg}`}>
            {props.children}
        </div>
    )
}