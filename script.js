body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(to right, #ff9a9e, #fad0c4);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0,0,0,0.3);
  transform: scale(0);
  animation: popup 2s ease-in-out forwards;
}

@keyframes popup {
  to {
    transform: scale(1);
  }
}

.qr-container img {
  margin-top: 20px;
  width: 150px;
  height: 150px;
}
