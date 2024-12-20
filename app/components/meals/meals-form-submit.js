'use client';
import { useParams } from "next/navigation";
import { useFormStatus } from "react-dom";

export default function MealsForSubmit() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>
        {pending ? 'Submitting...' : 'Share meal'}
    </button>
};
