import {GetServerSideProps, InferGetServerSidePropsType} from "next";
import PageLayout from "../index";

const tracks = [
    "track0",
    "track1",
    "track2",
    "track3",
    "track4",
    "track5",
    "track6",
    "track7",
    "track8",
]



export async function getServerSideProps({params}: InferGetServerSidePropsType<GetServerSideProps>) {
    const slug = params.id;

    console.log("/track getServerSideProps");

    return {
        props: {
            data: tracks[slug]
        }
    }
}



export default function TrackPage(props : { data: string }) {
    return (
        <PageLayout>
            <div>
                <h1>Track - {props.data}</h1>


                <div>data: {props.data}</div>
            </div>
        </PageLayout>

    )
}
