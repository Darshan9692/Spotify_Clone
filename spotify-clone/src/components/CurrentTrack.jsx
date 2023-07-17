import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

export default function CurrentTrack() {
    const [{ token, currentPlaying }, dispatch] = useStateProvider();
    console.log(currentPlaying);

    useEffect(() => {
        const getCurrentTrack = async () => {
            try {
                const response = await axios.get(
                    "https://api.spotify.com/v1/me/player/currently-playing",
                    {
                        headers: {
                            Authorization: "Bearer " + token,
                            "Content-Type": "application/json"
                        }
                    }
                );
                if (response.data !== "") {
                    const { item } = response.data;
                    const currentPlaying = {
                        id: item.id,
                        name: item.name,
                        artists: item.artists.map(artist => artist.name),
                        image: item.album.images[2].url
                    };
                    // console.log("Current playing track:", currentPlaying);
                    dispatch({ type: reducerCases.SET_PLAY, currentPlaying });
                }
            } catch (error) {
                console.log("Error retrieving currently playing track:", error);
            }
        };

        getCurrentTrack();
    }, [token, dispatch,currentPlaying]);

    // console.log("Current playing state:", currentPlaying);
    // console.log("Token:", token);

    return (
        <Container>
            {currentPlaying && (
                <div className="track">
                    <div className="track_image">
                        <img src={currentPlaying.image} alt="currentImage" />
                    </div>
                    <div className="track_info">
                        <h4>{currentPlaying.name}</h4>
                        <h6>{currentPlaying.artists.join(", ")}</h6>
                    </div>
                </div>
            )}
        </Container>
    );
}



const Container = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &_info {
      display: flex;
      flex-direction: column;
      h4 {
        color: white; 
      }
      h6 {
        color: #b3b3b3;
      }
    }
  }
`;
