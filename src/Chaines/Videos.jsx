import React, { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useParams } from 'react-router-dom'
import CustomiseHook from './CustomiseHook'
import ReactPlayer from 'react-player'


const Videos = () => {
    const [counter, setcounter] = useState(0)

    const [playlists, SetPlaylists] = useState([])
    const { id } = useParams()

    var options = {
        params: {
            part: 'snippet',
            playlistId: 'PLrSOXFDHBtfFuZttC17M-jNpKnzUL5Adc',
            maxResults: '50',
        },

        headers: {
            'X-RapidAPI-Key': '92b5603311msh4a7143f635bf4e8p10fcf6jsn9732cce7494f',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
          }
    };

    const url = "https://youtube-v311.p.rapidapi.com/playlistItems/";

    useEffect(() => {
        options.params.playlistId = id
        CustomiseHook(url, options).then(res => res.data).then(res => SetPlaylists(res))
    }, [id])

    let ved1 = playlists.items ? playlists.items[0].snippet.resourceId.videoId : null
    console.log(ved1);

    return (
        <div className='d-flex gap-3  p-2 jutify-content-center bg-info mt-5'>
            <div className="col-md-9">
                <ReactPlayer

                    controls
                    className="react-player w-100"
                    url={`https://www.youtube.com/watch?v=${ved1}`}
                />
                <div className='text-bold text-light text-header bg-dark rounded-1 my-2 p-3'>
                    <h3>test title</h3>
                    et nesciunt! Assumenda sed reprehenderit ducimus similique explicabo eligendi dolores cumque magnam laudantium praesentium. Quod odio voluptatibus perspiciatis impedit harum pariatur, nemo facilis, aperiam asperiores quidem ex beatae porro?
                    Error porro libero autem blanditiis, facere doloremque vitae culpa laborum maiores aut magni. Voluptatem quae earum fugit inventore assumenda. Quasi error optio similique animi fugiat architecto voluptates, recusandae praesentium eligendi.

                </div>



                <textarea name=""  id="" className='w-100 h-25  p-1 text-bold fs-4' cols="30" rows="10"></textarea>
                <button className="btn btn-warning">Add Note</button>

            </div>
            <div className="col-md-3">
                {playlists.items &&
                    playlists.items.map((play, ind) => (
                        <div className="row m-0" key={ind}>
                            <img
                                className="col-md-7  rounded-2"
                                src={play?.snippet.thumbnails.high.url}
                                alt=""
                            />
                            <p className="col-md-5 text-light">
                                {play?.snippet.title}
                                <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>
                            </p>



                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Videos
