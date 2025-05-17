import pandas as pd
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load data and train model
data = pd.read_csv('fraud_data.csv')  # Assumes CSV with 'label' column
X = data.drop('label', axis=1)
y = data['label']

model = RandomForestClassifier()
model.fit(X, y)

# Save model
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)
