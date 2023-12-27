import React, { useEffect, useState } from 'react'
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
            'X-RapidAPI-Key': 'fcdd00bb19msh4e64fe0dd2bced9p1b38ddjsn96cf1933c97f',
            'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
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
        <div className='d-flex gap-3  p-2 jutify-content-center'>
            <div className="col-md-8">
                <ReactPlayer

                    controls
                    className="react-player w-100"
                    url={`https://www.youtube.com/watch?v=${ved1}`}
                />
                <div className='text-bold text-light text-header'>
                    <h3>test title</h3>
                   et nesciunt! Assumenda sed reprehenderit ducimus similique explicabo eligendi dolores cumque magnam laudantium praesentium. Quod odio voluptatibus perspiciatis impedit harum pariatur, nemo facilis, aperiam asperiores quidem ex beatae porro?
                    Error porro libero autem blanditiis, facere doloremque vitae culpa laborum maiores aut magni. Voluptatem quae earum fugit inventore assumenda. Quasi error optio similique animi fugiat architecto voluptates, recusandae praesentium eligendi.
                    
                </div>

            </div>
            <div className="col-md-3">
                {playlists.items &&
                    playlists.items.map((play, ind) => (
                        <div className="text-center w-100  card-video text-dark rounded-4 m-2" key={ind}>
                            <img
                                className="mastryImg  w-100  rounded-2"
                                src={play?.snippet.thumbnails.high.url}
                                alt=""
                            />
                            <p className="text-primary mt-3 fs-5 fw-medium">
                                {play?.snippet.title}
                                <i className="fa-solid fa-circle-check text-white-50 check ms-2"></i>
                            </p>
                            {/* <span className='text-light fs-6'>{${play?.statistics.subscriberCount} subscribers}</span> */}
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Videos
