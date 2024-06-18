"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import movies from "@/app/Components/Movies";

export default function Page({ params }) {
    let itemID = params.id;
    let movie = movies.find(i => String(i.id) === itemID);

    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            setComments([...comments, comment]);
            setComment("");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 relative">
            <Link href="/">
                <span
                    className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                    Go back
                </span>
            </Link>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full">
                <Image
                    src={movie.imageUrl}
                    alt={movie.name}
                    width={500}
                    height={300}
                    className="object-cover w-full"
                />
                <div className="p-4">
                    <h1 className="text-4xl font-bold mb-4">{movie.name}</h1>
                    <p className="text-lg mb-2"><span className="font-semibold">Type:</span> {movie.type}</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Year:</span> {movie.year}</p>
                    <p className="text-lg mb-2"><span className="font-semibold">Runtime:</span> {movie.runtime}</p>
                    <p className="text-lg"><span className="font-semibold">Release Date:</span> {movie.releaseDate}</p>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-md w-full p-4">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mb-4">
                    <textarea
                        className="w-full border border-gray-300 rounded-lg p-2 mb-2"
                        rows="4"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="comment"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Submit
                    </button>
                </form>
                <div>
                    {comments.map((cmt, index) => (
                        <div key={index} className="bg-gray-100 p-2 mb-2 rounded">
                            {cmt}
                        </div>
                    ))}
                </div>
            </div>

</div>
)
    ;
}
