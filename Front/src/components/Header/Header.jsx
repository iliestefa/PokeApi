function Header({ searchValue, onSearchChange }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <span className="logo-icon">⚡</span>
          <h1 className="logo-text">Pokédex</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Busca un Pokémon (ej. Pikachu)..."
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

