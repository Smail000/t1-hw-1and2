import { IconButton } from "@/shared/ui/button";
import { Layout } from "@/shared/ui/layout";
import { Text } from "@/shared/ui/typography";
import { useNavigate } from "react-router"

export default function Component404({ text }: { text: string }) {
    const navigate = useNavigate();
    return (
        <Layout as="div" color="light" padding="medium" gap="medium" direction="column" className="items-center">
            <Text tag="span" size="large" weight="medium">{ text }</Text>
            <IconButton as="X" bgcolor="dark" onClick={() => navigate("/")}/>
        </Layout>
    )
}
