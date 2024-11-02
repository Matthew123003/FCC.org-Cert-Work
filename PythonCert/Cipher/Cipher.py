# Define the text to decrypt and the custom encryption key
text = 'mrttaqrhknsw ih puggrur'
custom_key = 'python'

def vigenere(message, key, direction=1):
    """
    Function to encrypt or decrypt a message using the Vigenère cipher.
    
    Args:
    - message (str): The text to encode or decode.
    - key (str): The encryption/decryption key.
    - direction (int): Determines if we're encrypting (1) or decrypting (-1).
    
    Returns:
    - str: The transformed message after encryption or decryption.
    """

    # Initialize key index to keep track of key characters used for each letter in message
    key_index = 0
    # Define the alphabet for referencing letter positions
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    # Initialize the output message
    final_message = ''

    # Loop through each character in the message, converted to lowercase
    for char in message.lower():

        # If the character is not a letter, append it as-is
        if not char.isalpha():
            final_message += char
        else:        
            # Select the appropriate character from the key using modulus to cycle through key characters
            key_char = key[key_index % len(key)]
            key_index += 1  # Move to the next key character for the next letter in the message

            # Calculate the offset (shift) based on the position of the key character in the alphabet
            offset = alphabet.index(key_char)
            # Find the position of the current character in the alphabet
            index = alphabet.find(char)
            # Calculate the new index for encryption/decryption
            new_index = (index + offset * direction) % len(alphabet)
            # Append the encrypted/decrypted character to the final message
            final_message += alphabet[new_index]
    
    return final_message  # Return the fully encrypted/decrypted message

def encrypt(message, key):
    """
    Encrypts the message using the Vigenère cipher.
    
    Args:
    - message (str): The text to encrypt.
    - key (str): The encryption key.
    
    Returns:
    - str: The encrypted text.
    """
    return vigenere(message, key)  # Calls vigenere function with direction=1 (default for encryption)
    
def decrypt(message, key):
    """
    Decrypts the message using the Vigenère cipher.
    
    Args:
    - message (str): The encrypted text to decrypt.
    - key (str): The decryption key (same as the encryption key).
    
    Returns:
    - str: The decrypted text.
    """
    return vigenere(message, key, -1)  # Calls vigenere function with direction=-1 for decryption

# Display the original encrypted message
print(f'\nEncrypted text: {text}')
print(f'Key: {custom_key}')

# Decrypt the message using the decrypt function and display the result
decryption = decrypt(text, custom_key)
print(f'\nDecrypted text: {decryption}\n')
