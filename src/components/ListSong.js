import React, { useContext, useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Songs } from "../Context";

export default function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setidSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  useEffect(()=>{
    setidSong(song.id)
  },[song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white">
          <tr className="h-12">
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
             
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-600 cursor-pointer ${idSong === song.id && 'text-teal-400'}`}
              onClick={() => handlePlaySong(song.id)}
            >
              <td className="text-center">{index + 1}</td>
              <td className="text-left">{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a href={song.url}>
                  <FaCloudDownloadAlt />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
