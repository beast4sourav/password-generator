import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);

  const generatePassword = () => {
    const numbers = "0123456789";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let charset = "";

    if (includeNumbers) charset += numbers;
    if (includeCharacters) charset += characters;

    if (charset.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Password Generator</h2>
      <input
        type="text"
        value={password}
        readOnly
        className="w-full p-2 mb-4 border rounded text-black" // Added text-black class
      />
      <button
        onClick={copyToClipboard}
        className="w-full mb-4 p-2 bg-blue-500 text-white rounded font-semibold hover:bg-blue-600"
      >
        Copy
      </button>
      <div className="mb-4">
        <label className="block mb-2">Password Length: {length}</label>
        <input
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2"
          />
          Include Numbers
        </label>
      </div>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={includeCharacters}
            onChange={(e) => setIncludeCharacters(e.target.checked)}
            className="mr-2"
          />
          Include Characters
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="w-full p-2 bg-green-500 text-white rounded font-semibold hover:bg-green-600"
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
