body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f0f0f0; color: #333; transition: background 0.3s, color 0.3s; }

.dark-mode { background-color: #121212; color: #ffffff; }

.hidden { display: none; }

#home-screen, #host-screen, #waiting-screen, #quiz-screen, #result-screen { padding: 20px; max-width: 600px; margin: auto; text-align: center; }

input, select, button, textarea { padding: 10px; margin: 10px 0; width: 90%; max-width: 500px; font-size: 16px; border-radius: 8px; border: 1px solid #ccc; }

button { background-color: #007bff; color: white; cursor: pointer; border: none; transition: background-color 0.3s; }

button:hover { background-color: #0056b3; }

#options button { display: block; width: 100%; margin: 5px 0; }

#status-bar { display: flex; justify-content: space-between; margin-bottom: 10px; font-weight: bold; }

#leaderboard li, #player-list li { list-style: none; padding: 5px; border-bottom: 1px solid #ccc; }

#theme-toggle { position: fixed; top: 10px; right: 10px; background: #444; color: white; padding: 5px 10px; border-radius: 8px; cursor: pointer; z-index: 999; }

@media (max-width: 600px) { body { font-size: 16px; }

input, select, button, textarea { font-size: 18px; }

#status-bar { flex-direction: column; gap: 5px; } }

  
