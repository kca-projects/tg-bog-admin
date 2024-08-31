
interface TitleProp {
  title: string;
  descritpion: string;
} 

const Heading = ({title, descritpion} : TitleProp) => {
  return (
    <div>
    <h1 className="text-3xl font-bold tracking-tight">
      {title}
    </h1>
    <p className="text-sm text-muted-foreground">{descritpion}</p>
  </div>
  )
}

export default Heading
