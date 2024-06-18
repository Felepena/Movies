
import Link from 'next/link';
import movies from "@/app/Components/Movies";
import Image from "next/image";

const Home = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-8">Movie List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {movies.map((movie) => (
                <div key={movie.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <Link href={`/${movie.id}`}>
                        <span>
                            <Image
                                src={movie.imageUrl}
                                alt={movie.name}
                                width={500}
                                height={300}
                                className="object-cover w-full h-48"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold">{movie.name}</h2>
                                <p className="text-gray-600">{movie.year}</p>
                            </div>
                        </span>
                    </Link>
                </div>
            ))}
        </div>
    </div>
);

export default Home;
